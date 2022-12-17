import './tufte.module.css'
import meta from './header'
import styles from './styles.module.css'

const modules = import.meta.glob('./images/*')
const lazyImages = <figure />
const Lazy = () => lazyImages

const blog = (
    <article>
        <section>
            <p>
                <h1 className={styles.title}>DIFFUSION</h1>
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
