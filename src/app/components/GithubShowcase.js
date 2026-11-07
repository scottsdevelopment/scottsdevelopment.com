import { featuredRepos, profile, formatPushed } from '../../content/github'
import Section from './Section'

/**
 * Table of public repositories. Data comes from src/content/github.json,
 * which `npm run github:sync` regenerates; nothing here calls GitHub.
 */
export default function GithubShowcase({ id = 'github', limit, compact = false }) {
  const repos = limit ? featuredRepos().slice(0, limit) : featuredRepos()

  return (
    <Section
      id={id}
      title="Open source and public code"
      lede={
        <>
          {profile.publicRepos} public repositories on{' '}
          <a className="link" href={profile.url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . These are the ones worth your time. Stars and dates are pulled from GitHub, not typed in.
        </>
      }
      tone="deep"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-[15px]">
          <caption className="sr-only">Selected public repositories by scottsdevelopment</caption>
          <thead>
            <tr className="border-b border-ink/30 text-sm text-ink-mute">
              <th scope="col" className="py-2 pr-4 font-medium">Repository</th>
              {!compact && <th scope="col" className="py-2 pr-4 font-medium">What it is</th>}
              <th scope="col" className="py-2 pr-4 font-medium">Language</th>
              <th scope="col" className="py-2 pr-4 font-medium tnum">Updated</th>
              <th scope="col" className="py-2 font-medium tnum text-right">Stars</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((r) => (
              <tr key={r.name} className="border-b border-rule align-top">
                <td className="py-3 pr-4">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink hover:text-moss"
                  >
                    {r.name}
                  </a>
                  <div className="text-xs text-ink-mute">{r.area}</div>
                  {compact && <div className="mt-1 text-sm text-ink-soft">{r.blurb}</div>}
                </td>
                {!compact && (
                  <td className="py-3 pr-4 text-ink-soft">
                    {r.blurb}
                    {r.homepage && (
                      <>
                        {' '}
                        <a className="link" href={r.homepage} target="_blank" rel="noopener noreferrer">
                          Demo
                        </a>
                      </>
                    )}
                  </td>
                )}
                <td className="py-3 pr-4 whitespace-nowrap text-ink-soft">{r.language || '—'}</td>
                <td className="py-3 pr-4 whitespace-nowrap text-ink-soft tnum">{formatPushed(r.pushedAt)}</td>
                <td className="py-3 whitespace-nowrap text-right text-ink-soft tnum">{r.stars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-[15px]">
        <a className="link" href={profile.url} target="_blank" rel="noopener noreferrer">
          Everything else on GitHub
        </a>
      </p>
    </Section>
  )
}
