import { colors } from '../../config/colors'
import Section from './Section'
import { featuredRepos, profile, formatPushed } from '../../content/github'

/**
 * Public repositories. Data comes from src/content/github.json, regenerated
 * by `npm run github:sync`; the static export never calls GitHub.
 */
export default function GithubShowcase({ id = 'github', tone = 'primary', limit }) {
  const repos = limit ? featuredRepos().slice(0, limit) : featuredRepos()

  return (
    <Section
      id={id}
      tone={tone}
      eyebrow="Public code"
      title="Open source and public repositories."
      lede={
        <>
          {profile.publicRepos} public repositories on{' '}
          <a className="text-cyan-600 font-semibold hover:text-cyan-700" href={profile.url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . These are the ones worth your time. Stars and dates are pulled from GitHub, not typed in.
        </>
      }
    >
      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[48rem]">
            <caption className="sr-only">Selected public repositories by scottsdevelopment</caption>
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th scope="col" className={`py-4 px-6 text-sm uppercase tracking-wider font-semibold ${colors.text.secondary}`}>Repository</th>
                <th scope="col" className={`py-4 px-6 text-sm uppercase tracking-wider font-semibold ${colors.text.secondary}`}>What it is</th>
                <th scope="col" className={`py-4 px-6 text-sm uppercase tracking-wider font-semibold ${colors.text.secondary}`}>Language</th>
                <th scope="col" className={`py-4 px-6 text-sm uppercase tracking-wider font-semibold ${colors.text.secondary}`}>Updated</th>
                <th scope="col" className={`py-4 px-6 text-sm uppercase tracking-wider font-semibold ${colors.text.secondary} text-right`}>Stars</th>
              </tr>
            </thead>
            <tbody className={`text-[15px] ${colors.text.body}`}>
              {repos.map((r) => (
                <tr key={r.name} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors align-top">
                  <td className="py-4 px-6">
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-cyan-600">
                      {r.name}
                    </a>
                    <div className={`text-xs ${colors.text.muted} mt-0.5`}>{r.area}</div>
                  </td>
                  <td className={`py-4 px-6 ${colors.text.secondary}`}>
                    {r.blurb}
                    {r.homepage && (
                      <>
                        {' '}
                        <a className="text-cyan-600 font-semibold hover:text-cyan-700" href={r.homepage} target="_blank" rel="noopener noreferrer">
                          Demo ↗
                        </a>
                      </>
                    )}
                  </td>
                  <td className={`py-4 px-6 whitespace-nowrap ${colors.text.secondary}`}>{r.language || '—'}</td>
                  <td className={`py-4 px-6 whitespace-nowrap ${colors.text.secondary}`}>{formatPushed(r.pushedAt)}</td>
                  <td className={`py-4 px-6 whitespace-nowrap text-right ${colors.text.secondary}`}>{r.stars}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-center mt-8">
        <a className="font-bold text-cyan-600 hover:text-cyan-700" href={profile.url} target="_blank" rel="noopener noreferrer">
          Everything else on GitHub ↗
        </a>
      </p>
    </Section>
  )
}
