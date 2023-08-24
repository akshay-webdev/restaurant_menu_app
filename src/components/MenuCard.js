import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
            {
                menuData.map((item) => {
                    return (
                            <div className="card col-md-3">
                                <h6>{item.Id}</h6>
                                <img src={item.Image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p>{item.name}</p>
                                    <div className='d-flex align-items-center'>
                                        <p className="card-text">{item.category}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                                <div className='card-footer'>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                    )
                })}
        </>
    )
}

export default MenuCard