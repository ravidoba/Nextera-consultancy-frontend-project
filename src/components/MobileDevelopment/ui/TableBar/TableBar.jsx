import './TableBar.scss';

const TableBar = () => {
    const data = [
        {
            title: 'Who We Are',
            desc: `Aleading technology company with a global presence. Our team, our greatest asset, i technical skilled and highly experienced, dedicated to
Who We Are delivering innovative and impactiul solutions for startups and enterprises alike. We strive to set new benchmarks in quality and creativity.`
        },
        {
            title: 'What We Do',
            desc: `We are an Al-driven software development company delivering high-

What We Do quality mobile and web applications with exceptional speed. Trusted by top brands, SMEs, and startups, our innovative solutions bring unique. visions to life.`
        }
    ]
    return (
        <div className='TableBar'>
            {data?.map((val, i) => {
                return <div key={i} className="table_box">
                    <div className="left">{val?.title}</div>
                    <div className="right">{val?.desc}</div>
                </div>
            })}
        </div>
    )
}

export default TableBar