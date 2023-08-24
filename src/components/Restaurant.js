import React, { useState } from 'react';
import Menu from "./MenuApi.js"
import MenuCard from './MenuCard.js';
const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curEle) => {
            return curEle.category === category
        });
        setMenuData(updatedList)

    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" onClick={() => filterItem("breakfast")}>breakfast</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => filterItem("lunch")}>Lunch</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => filterItem("dinner")}>Dinner</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => filterItem("evening")}>Evening</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => setMenuData(Menu)}>All</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className='container'>
                <div className='row'>

                    <MenuCard menuData={menuData} />

                </div>
            </div>

        </>
    )
}

export default Restaurant