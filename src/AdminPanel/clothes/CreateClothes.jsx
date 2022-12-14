import React, {useState} from 'react';
import { List,AutocompleteArrayInput, Datagrid, Edit, SelectArrayInput, SelectInput, NumberInput, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import {useDispatch} from "react-redux";
import { nanoid } from 'nanoid'

const CreateClothes = (props) => {

    return (
            <Create  title="Create a Post" {...props}>
                <SimpleForm className="create__card">
                    <SelectInput source="category"  choices={[
                        {
                            id: "films",
                            name: "films"
                        },
                        {
                            id: "series",
                            name: "series"
                        },
                        {
                            id: "cartoons",
                            name: "cartoons"
                        },
                    ]}/>
                    <p></p>
                    <TextInput source="title" />
                    <NumberInput source="year" />
                    <TextInput source="img" />
                    <TextInput source="logo" />
                    <TextInput source="desc" />

                    <AutocompleteArrayInput  optionText='id' optionValue='name' source="country" choices={[
                        {
                            id: "CША",
                            name: JSON.stringify({id: 1, desc: 'CША'})
                        },
                        {
                            id:"Великобритания",
                            name: JSON.stringify({id: 2, desc: 'Великобритания'})
                        },
                        {
                            id: "Италия",
                            name: JSON.stringify({id: 3, desc: 'Италия'})
                        },
                        {
                            id: "Канада",
                            name: JSON.stringify({id: 4, desc: 'Канада'})
                        },
                        {
                            id: "Франция",
                            name: JSON.stringify({id: 5, desc: 'Франция'})
                        },
                        {
                            id: "Бельгия",

                            name: JSON.stringify({id: 6, desc: 'Бельгия'})
                        },
                        {
                            id: "Южная Корея",
                            name: JSON.stringify({id: 7, desc: 'Южная Корея'})
                        },
                        {
                            id: "Россия",
                            name: JSON.stringify({id: 8, desc: 'Россия'})
                        },
                        {
                            id: "Люксембург",
                            name: JSON.stringify({id: 9, desc: 'Люксембург'})
                        }
                    ]}/>
                    <SelectArrayInput optionText='id' optionValue='name' source="genre" choices={[
                        {
                           id: "Мелодрама",
                           name: JSON.stringify({id: 1, desc: 'Мелодрама'})
                        },
                        {
                           id:'Драма',
                            name: JSON.stringify({id: 2, desc: 'Драма'})
                        },
                        {
                           id:"Музыкальный",
                            name: JSON.stringify({id: 3, desc: 'Музыкальный'})
                        },
                        {
                           id: "Триллер",
                            name: JSON.stringify({id: 4, desc: 'Триллер'})
                        }
                    ]}/>
                    <SelectArrayInput optionText='id' optionValue='name' source="content" choices={[
                        {
                            id: "Жизнь1",
                            name: JSON.stringify({id: 5, desc: 'Жизнь'})
                        },
                        {
                            id: "Дети",
                            name: JSON.stringify({id: 6, desc: 'Дети'})
                        },
                        {
                            id: "Любовь",
                            name: JSON.stringify({id: 7, desc: 'Любовь'})

                        },
                        {
                            id: "Сметь",
                            name: JSON.stringify({id: 8, desc: 'Сметь'})
                        },
                        {
                            id: "Битва",
                            name: JSON.stringify({id: 9, desc: 'Битва'})
                        },
                        {
                            id: "Расследование",
                            name: JSON.stringify({id: 10, desc: 'Расследование'})
                        }
                    ]}/>
                    <TextInput source="price" />
                    <TextInput source="video" />
                    <div className="desc">
                    </div>
                </SimpleForm>

            </Create>
    );
};

export default CreateClothes;