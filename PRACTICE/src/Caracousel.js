export default function Caracousel() {
    return (
        <>
            <div className="slide-container">
                <section className="slides">
                    <img src={"../public/Images/goOntoTheWorld.jpg"} alt="" className="slide-image active" />
                    <img src={"../public/Images/king.jpg"} alt="" className="slide-image active" />
                    <img src={"../public/Images/mountain.jpg"} alt="" className="slide-image active" />
                </section>
                <div className="buttons">
                    <span className="next">&larr;</span>
                    <span className="prev">&rarr;</span>
                </div>
                <div className="dotsContainer">
                    <div className="dot active" attr="0"></div>
                    <div className="dot" attr="1"></div>
                    <div className="dot" attr="2"></div>
                </div>
            </div>
            <div className="img-wrapper">
                <figure className="image-container">
                    <input type="file" className="file" accept="image/png, image/gif, image/jpeg" hidden />
                    <div className="img-holder">
                        <i className='bx bx-x-circle img-clear'></i>
                        <i className='bx bxs-cloud-upload'></i>
                        <h2 className="img-msg">Click to upload image</h2>
                    </div>
                    <button className="img-btn">Select Image</button>
                </figure>
                <figure className="image-container">
                    <input type="file" className="file" accept="image/png, image/gif, image/jpeg" hidden />
                    <div className="img-holder">
                        <i className='bx bx-x-circle img-clear'></i>
                        <i className='bx bxs-cloud-upload'></i>
                        <h2 className="img-msg">Click to upload image</h2>

                    </div>
                    <button className="img-btn">Select Image</button>
                </figure>
                <figure className="image-container">
                    <input type="file" className="file" accept="image/png, image/gif, image/jpeg" hidden />
                    <div className="img-holder">
                        <i className='bx bx-x-circle img-clear'></i>
                        <i className='bx bxs-cloud-upload'></i>
                        <h2 className="img-msg">Click to upload image</h2>
                    </div>
                    <button className="img-btn">Select Image</button>
                </figure>
            </div>
        </>
    )
}