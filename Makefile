.PHONY: help build up down restart logs logs-follow shell install clean setup

HOST_UID := $(shell id -u)
HOST_GID := $(shell id -g)

# Dynamically extract service names from docker-compose.yml
SERVICES := $(shell docker compose config --services 2>/dev/null)
SERVICES_LIST := $(shell echo $(SERVICES) | tr ' ' '|')

# Default target
help:
	@echo "Available commands:"
	@echo "  make up              - Start all services"
	@echo "  make down            - Stop all services"
	@echo "  make restart         - Restart all services"
	@echo "  make build           - Build all services"
	@echo "  make logs [service]     - Show last 100 log lines (service: $(SERVICES_LIST))"
	@echo "  make logs-follow [service] - Follow logs in real-time (service: $(SERVICES_LIST))"
	@echo "  make status          - Show container status"
	@echo ""
	@echo "Development commands:"
	@echo "  make install [service] - Install dependencies (service: $(SERVICES_LIST))"
	@echo "  make shell [service]   - Open shell (service: $(SERVICES_LIST))"
	@echo "  make test [service]    - Run tests (service: $(SERVICES_LIST)|all)"
	@echo "  make test-watch [service] - Run tests in watch mode (service: $(SERVICES_LIST))"
	@echo "  make test-coverage [service] - Run tests with coverage (service: $(SERVICES_LIST))"
	@echo ""
	@echo "Utility commands:"
	@echo "  make clean           - Remove all containers and volumes"
	@echo "  make setup           - Complete development environment setup"
	@echo ""
	@echo "Examples:"
	@echo "  make setup           - Complete setup"
	@echo "  make install $(word 1,$(SERVICES))"
	@echo "  make shell $(word 1,$(SERVICES))"
	@echo "  make test all        - Run all tests"
	@echo "  make test-coverage $(word 1,$(SERVICES))"

# Docker Compose commands
up:
	@HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose up -d

down:
	@HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose down

restart:
	@HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose restart

build:
	@HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose build

logs:
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		docker compose logs --tail=100; \
	else \
		docker compose logs --tail=100 $(filter-out $@,$(MAKECMDGOALS)); \
	fi

logs-follow:
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		@HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose logs -f; \
	else \
		@HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose logs -f $(filter-out $@,$(MAKECMDGOALS)); \
	fi

status:
	docker compose ps

# Development commands
install:
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Please specify a service: make install [$(SERVICES_LIST)]"; \
	else \
		docker compose run --rm --user $(HOST_UID):$(HOST_GID) $(filter-out $@,$(MAKECMDGOALS)) sh -c "cd /app && npm install"; \
	fi

# Shell access
shell:
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Please specify a service: make shell [$(SERVICES_LIST)]"; \
	else \
		case "$(filter-out $@,$(MAKECMDGOALS))" in \
		$(SERVICES)) \
			docker compose exec --user $(HOST_UID):$(HOST_GID) $(filter-out $@,$(MAKECMDGOALS)) sh ;; \
		*) \
			docker compose exec --user $(HOST_UID):$(HOST_GID) $(filter-out $@,$(MAKECMDGOALS)) sh ;; \
		esac \
	fi

# Test commands
test:
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Please specify a service: make test [$(SERVICES_LIST)|all]"; \
	elif [ "$(filter-out $@,$(MAKECMDGOALS))" = "all" ]; then \
		echo "🧪 Running all tests..."; \
		$(foreach service,$(SERVICES), \
			echo "📋 $(service) tests:"; \
			docker compose exec --user $(HOST_UID):$(HOST_GID) $(service) sh -c "cd /app && npm test"; \
		) \
	else \
		docker compose exec --user $(HOST_UID):$(HOST_GID) $(filter-out $@,$(MAKECMDGOALS)) sh -c "cd /app && npm test"; \
	fi

test-watch:
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Please specify a service: make test-watch [$(SERVICES_LIST)]"; \
	else \
		docker compose exec --user $(HOST_UID):$(HOST_GID) $(filter-out $@,$(MAKECMDGOALS)) sh -c "cd /app && npm run test:watch"; \
	fi

test-coverage:
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Please specify a service: make test-coverage [$(SERVICES_LIST)]"; \
	else \
		docker compose exec --user $(HOST_UID):$(HOST_GID) $(filter-out $@,$(MAKECMDGOALS)) sh -c "cd /app && npm run test:coverage"; \
	fi

# Utility commands
clean:
	@HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose down -v
	@HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker system prune -f

# Complete development environment setup
setup:
	@echo "🔨 Building Docker images..."
	@make build
	@echo "📦 Installing dependencies..."
	$(foreach service,$(SERVICES), \
		@echo "Installing dependencies for $(service)..."; \
		@make install $(service); \
	)
	@echo "🚀 Starting services..."
	@make up
	@echo "⏳ Waiting for services to start..."
	@sleep 5
	@echo "📊 Checking service status..."
	@make status
	@echo ""
	@echo "✅ Development environment ready!"
	@echo "🌐 Services available:"
	$(foreach service,$(SERVICES), \
		@echo "  - $(service)"; \
	)
	@echo ""
	@echo "💡 Use 'make logs [service]' to view logs"
	@echo "💡 Use 'make shell [service]' to open a shell"

# Catch-all targets
%:
	@: