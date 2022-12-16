import './tufte.module.css'
import meta from './header'
import styles from './styles.module.css'
import images from './images'

const ImagesList = () => images.map(image =>
    <figure><img src={image} loading="lazy" /></figure>
)

const Link = ({ children, attributes: { href }}) => (
    <a target='_blank' rel='noreferrer noopener' href={href}>
        {children}
     </a>
)

const LinkHere = ({ children, attributes: { href }}) => (
    <a href={href}>
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


const blog = (
    <article>
        <section>
            <p>
                <span className='newthought'>Diffusion</span>
            </p>
        </section>

        <section>
            <ImagesList />
        </section>
   
    </article>
)

document.head.appendChild(meta)
document.head.appendChild( 
    <script async defer data-domain="scottorly.github.io/diffusion" src="https://plausible.io/js/plausible.js"></script>
)
document.body.appendChild(blog)
