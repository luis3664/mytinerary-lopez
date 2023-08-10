import './section.css'

const Section = ({children, extraClass}) => {
    const basic = 'section-style d-flex flex-column justify-content-center align-items-center ';
    console.log(extraClass);
    return (
        <section className={basic + extraClass}>
            {children}
        </section>
    )
}

export default Section