import React from 'react';
import {fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import restProvider from 'ra-data-simple-rest';
import PostListClothes from "./clothes/PostListClothes";
import EditClothes from "./clothes/EditClothes";
import CreateClothes from "./clothes/CreateClothes";
import PostListUsers from "./users/PostListUsers";
import EditUsers from "./users/EditUsers";
import CreateUsers from "./users/CreateUsers";
import PostListOrders from "./orders/PostListOrders";
import EditOrders from "./orders/EditOrders";

const AdminPanel = () => {

    // const fetchJson = (url, options = {}) => {
    //     if (!options.headers) {
    //         options.headers = new Headers({ Accept: 'application/json' });
    //     }
    //     // add your own headers here
    //     options.headers.set('X-Custom-Header', 'foobar');
    //     return fetchUtils.fetchJson(url, options);
    // }
    //
    // const dataProvider = simpleRestProvider('http://localhost:3000',  fetchJson)

    return (
        <section className='adminPanel'>
            <Admin dataProvider={restProvider('http://localhost:3000')}>
                <Resource create={CreateClothes} edit={EditClothes} name="data" list={PostListClothes}/>
                <Resource create={CreateUsers} edit={EditUsers} name="users" list={PostListUsers}/>
            </Admin>,
        </section>
    );
};

export default AdminPanel;