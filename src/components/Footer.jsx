const Footer = (props) => {
    const { showModal, handleToggleModal, data } = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>Astronomy picture of the day: NASA</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal}>
                <p><i class="fa-brands fa-readme"></i> Read more</p>
            </button>
        </footer>
    )
}

export default Footer
