const CardTopTen = ({topTen}) => {
    return (
        <>
        {
            topTen.map(el => (
                <div key={el.id}>
                    <h1>{el.nickname}</h1>
                    <h5>{el.status}</h5>
                    <h5>{el.ranking}</h5>
                    <img src={el.avatar} alt="sda"/>
                </div>
            ))
        }
        </>
    )
}

export default CardTopTen
