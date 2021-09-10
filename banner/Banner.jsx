import './Banner.css'

const Banner = (props) => {
    return (
        <div class="banner-panel">
            <span class="banner-text">{props.text}</span>
        </div>
    )
}

export default Banner;