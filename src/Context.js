import React from 'react';

export const Context = React.createContext();

export const Provider = props => {
    const widget = React.useState({
        open: false,
        activeView: 'featured'
    });
    const restaurant = React.useState({
        name: 'Burrito Boyz',
        locations: [
            {label: 'Toronto', value:'toronto'},
            {label:'London', value:'london'},
            {label:'Vancouver', value:'vancouver'}
        ],
        menu_items: [
            {
                name: 'Chicken Burrito',
                category: 'Burritos',
                description: 'Our classic hearty chicken burrito',
                base_price: 8.95,
                modifiers: ['modifier-id-1', 'modifier-id-2'],
                calories: { min: 530, max: 1350 },
                featured: true
            },
            {
                name: 'Steak Burrito',
                category: 'Burritos',
                description: 'Our classic hearty steak burrito',
                base_price: 8.95,
                modifiers: ['modifier-id-1', 'modifier-id-2'],
                calories: { min: 640, max: 1510 },
                featured: true
            },
            {
                name: 'Pulled Pork Burrito',
                category: 'Burritos',
                description: 'Our classic hearty pulled pork burrito',
                base_price: 8.95,
                modifiers: ['modifier-id-1', 'modifier-id-2'],
                calories: { min: 640, max: 1510 },
                featured: true
            },
            {
                name: 'Calamari Burrito',
                category: 'Burritos',
                description: 'Our classic hearty calamari burrito',
                base_price: 8.95,
                modifiers: ['modifier-id-1', 'modifier-id-2'],
                calories: { min: 430, max: 1180 },
                featured: true
            },
            {
                name: 'Sweet Potato Burrito',
                category: 'Burritos',
                description: 'Our classic hearty sweet potato burrito',
                base_price: 8.95,
                modifiers: ['modifier-id-1', 'modifier-id-2'],
                calories: { min: 380, max: 1130 },
                featured: false
            },
            {
                name: 'Ground Soy Burrito',
                category: 'Burritos',
                description: 'Our classic hearty ground soy burrito',
                base_price: 8.95,
                modifiers: ['modifier-id-1', 'modifier-id-2'],
                calories: { min: 370, max: 1120 },
                featured: false
            },
            {
                name: 'Bean Burrito',
                category: 'Burritos',
                description: 'Our classic hearty bean burrito',
                base_price: 8.95,
                modifiers: ['modifier-id-1', 'modifier-id-2'],
                calories: { min: 600, max: 1510 },
                featured: false
            },
            {
                name: 'Shrimp Burrito',
                category: 'Burritos',
                description: 'Our classic hearty shrimp burrito',
                base_price: 8.95,
                modifiers: ['modifier-id-1', 'modifier-id-2'],
                calories: { min: 450, max: 1210 },
                featured: false
            },
            {
                name: 'Haddock Burrito',
                category: 'Burritos',
                description: 'Our classic hearty haddock burrito',
                base_price: 8.95,
                modifiers: ['modifier-id-1', 'modifier-id-2'],
                calories: { min: 550, max: 1370 },
                featured: false
            },
            {
                name: 'Halibut Burrito',
                category: 'Burritos',
                description: 'Our classic hearty halibut burrito',
                base_price: 8.95,
                modifiers: ['modifier-id-1', 'modifier-id-2'],
                calories: { min: 520, max: 1300 },
                featured: false
            }
        ]
    });
    const order = React.useState({
        location: null,
        activeItem: null
    });
    return(
        <Context.Provider value={{widget: widget, restaurant: restaurant, order: order}}>
            {props.children}
        </Context.Provider>
    );
}