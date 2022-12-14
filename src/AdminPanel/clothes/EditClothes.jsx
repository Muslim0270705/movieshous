import React from 'react';
import {
    List,
    Datagrid,
    Edit,
    SelectArrayInput,
    SelectInput,
    NumberInput,
    Create,
    SimpleForm,
    DateField,
    TextField,
    EditButton,
    TextInput,
    DateInput,
    AutocompleteArrayInput
} from 'react-admin';


const EditClothes = (props) => {
    return (
        <Edit title={'Изменить вещь'} {...props}>
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

                <AutocompleteArrayInput  optionText='name' source="country" choices={[
                    {
                        id: {
                            desc:"США"
                        },
                        name: "США",
                    },
                    {
                        id: {
                            desc:"Великобритания"
                        },
                        name: "Великобритания"
                    },
                    {
                        id: {
                            desc:"Италия"
                        },
                        name: "Италия"
                    },
                    {
                        id: {
                            desc:"Канада"
                        },
                        name: "Канада"
                    },
                    {
                        id: "Франция",
                        data: {
                            desc:"Франция"
                        },
                        name: "Франция"
                    },
                    {
                        id: "Бельгия",
                        data: {
                            desc:"Бельгия"
                        },
                        name: "Бельгия"
                    },
                    {
                        id: "Бельгия",
                        name: "Бельгия"
                    },
                    {
                        id: "Южная Корея",
                        name: "Южная Корея"
                    },
                    {
                        id: "Россия",
                        name: "Россия"
                    },
                    {
                        id: "Люксембург",
                        name: "Люксембург"
                    },
                    {
                        id: "Германия",
                        name: "Германия"
                    },
                    {
                        id: "Испания",
                        name: "Испания"
                    },
                    {
                        id: "Румыния",
                        name: "Румыния"
                    },
                    {
                        id: "Новая Зеландия",
                        name: "Новая Зеландия"
                    },
                    {
                        id: "Австралия",
                        name: "Австралия"
                    },
                ]}/>
                <SelectArrayInput source="genre" choices={[
                    {
                        id: "Мелодрама",
                        name: "Мелодрама"
                    },
                    {
                        id: "Драма",
                        name: "Драма"
                    },
                    {
                        id: "Музыкальный",
                        name: "Музыкальный"
                    },
                    {
                        id: "Триллер",
                        name: "Триллер"
                    },
                    {
                        id: "Фантастика",
                        name: "Фантастика"
                    },
                    {
                        id: "Исторический",
                        name: "Исторический"
                    },
                    {
                        id: "Биография",
                        name: "Биография"
                    },
                    {
                        id: "Комедия",
                        name: "Комедия"
                    },
                    {
                        id: "Криминал",
                        name: "Криминал"
                    },
                    {
                        id: "Военный",
                        name: "Военный"
                    },
                    {
                        id: "Спорт",
                        name: "Спорт"
                    },
                    {
                        id: "Боевик",
                        name: "Боевик"
                    },
                    {
                        id: "Приключения",
                        name: "Приключения"
                    },
                    {
                        id: "Вестерн",
                        name: "Вестерн"
                    },
                    {
                        id: "Вестерн",
                        name: "Вестерн"
                    },
                    {
                        id: "Ужасы",
                        name: "Ужасы"
                    }
                ]}/>
                <SelectArrayInput source="content" choices={[
                    {
                        id: "Жизнь",
                        name: "Жизнь"
                    },
                    {
                        id: "Дети",
                        name: "Дети"
                    },
                    {
                        id: "Любовь",
                        name: "Любовь"
                    },
                    {
                        id: "Сметь",
                        name: "Сметь"
                    },
                    {
                        id: "Битва",
                        name: "Битва"
                    },
                    {
                        id: "Расследование",
                        name: "Расследование"
                    },
                ]}/>
                <TextInput source="price" />
                <TextInput source="video" />
                <div className="desc">
                </div>
            </SimpleForm>

        </Edit>
    );
};

export default EditClothes;