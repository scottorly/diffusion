import './tufte.module.css'
import meta from './header'
import styles from './styles.module.css'

const Link = ({ children, attributes: { href }}) => (
    <a target='_blank' rel='noreferrer noopener' href={href}>
        {children}
     </a>
)

const MarginNote = ({ children, attributes: { id } }) => (
    <>
        <label for={id} className="margin-toggle">&#8853;</label>
        <input type="checkbox" id={id} className="margin-toggle"/>
        <span className="marginnote">
            { children }
        </span>
    </>
)

const SideNote = ({ children, attributes: { id } }) => (
    <>
        <label for={id} className="margin-toggle sidenote-number"/>
        <input type="checkbox" id={id} className="margin-toggle"/>
        <span className="sidenote">
            { children }
        </span>
    </>
)

const modules = import.meta.glob('./images/*')
const lazyImages = <figure />
const Lazy = () => lazyImages

const blog = (
    <article>
        <section>
            <h1 className={styles.title}>DIFFUSION</h1>
            <p className="subtitle">
                <a href='https://scottorly.github.io'>Scott Orlyck</a>
            </p>
        </section>
        <section>
            <p>
                <MarginNote>
                    <Link href='https://gist.github.com/scottorly/ce416b17be4f32f75be2c59abcc624d4'>Pipeline examples</Link>
                </MarginNote>
            </p>
        </section>
        <section>
            <Lazy />
        </section>
    </article>
)
for (const path in modules) {
    modules[path]().then((mod) => {
        blog.appendChild(<section><figure><img src={mod.default} /></figure></section>)
    })
}

document.head.appendChild(meta)
document.head.appendChild(
    <script async defer data-domain="scottorly.github.io/diffusion" src="https://plausible.io/js/plausible.js"></script>
)
document.body.appendChild(<title>DIFFUSION</title>)
document.body.appendChild(blog)
