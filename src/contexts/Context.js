import React from 'react';

export const Context = React.createContext();

export const Provider = props => {
    const widget = React.useState({
        open: false,
        activeView: 'featured',
        previousView: null,
        activeItem: null,
        activeItemBasePrice: 0,
        activeItemPrice: 0,
        currentOrderStep: 1,
        orderSteps: [
            {
                step: 1,
                name: 'select'
            },
            {
                step: 2,
                name: 'customize'
            },
            {
                step: 3,
                name: 'review'
            },
            {
                step: 4,
                name: 'pay'
            }
        ]
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
                id: 431543,
                name: 'Chicken Burrito',
                category: 'Burritos',
                description: 'Our classic hearty chicken burrito',
                base_price: 8.95,
                modifiers: ['size', 'tortilla', 'beans', 'cheese', 'other toppings', 'salsa', 'spice level', 'extras'],
                calories: { min: 530, max: 1350 },
                featured: true,
                selected_modifiers: []
            },
            {
                id: 431544,
                name: 'Steak Burrito',
                category: 'Burritos',
                description: 'Our classic hearty steak burrito',
                base_price: 8.95,
                modifiers: ['size', 'tortilla', 'beans', 'cheese', 'other toppings', 'salsa', 'spice level', 'extras'],
                calories: { min: 640, max: 1510 },
                featured: true,
                selected_modifiers: []
            },
            {
                id: 431545,
                name: 'Pulled Pork Burrito',
                category: 'Burritos',
                description: 'Our classic hearty pulled pork burrito',
                base_price: 8.95,
                modifiers: ['size', 'tortilla', 'beans', 'cheese', 'other toppings', 'salsa', 'spice level', 'extras'],
                calories: { min: 640, max: 1510 },
                featured: true,
                selected_modifiers: []
            },
            {
                id: 431546,
                name: 'Calamari Burrito',
                category: 'Burritos',
                description: 'Our classic hearty calamari burrito',
                base_price: 8.95,
                modifiers: ['size', 'tortilla', 'beans', 'cheese', 'other toppings', 'salsa', 'spice level', 'extras'],
                calories: { min: 430, max: 1180 },
                featured: true,
                selected_modifiers: []
            },
            {
                id: 431547,
                name: 'Sweet Potato Burrito',
                category: 'Burritos',
                description: 'Our classic hearty sweet potato burrito',
                base_price: 8.95,
                modifiers: ['size', 'tortilla', 'beans', 'cheese', 'other toppings', 'salsa', 'spice level', 'extras'],
                calories: { min: 380, max: 1130 },
                featured: false,
                selected_modifiers: []
            },
            {
                id: 431548,
                name: 'Ground Soy Burrito',
                category: 'Burritos',
                description: 'Our classic hearty ground soy burrito',
                base_price: 8.95,
                modifiers: ['size', 'tortilla', 'beans', 'cheese', 'other toppings', 'salsa', 'spice level', 'extras'],
                calories: { min: 370, max: 1120 },
                featured: false,
                selected_modifiers: []
            },
            {
                id: 431549,
                name: 'Bean Burrito',
                category: 'Burritos',
                description: 'Our classic hearty bean burrito',
                base_price: 8.95,
                modifiers: ['size', 'tortilla', 'beans', 'cheese', 'other toppings', 'salsa', 'spice level', 'extras'],
                calories: { min: 600, max: 1510 },
                featured: false,
                selected_modifiers: []
            },
            {
                id: 431550,
                name: 'Shrimp Burrito',
                category: 'Burritos',
                description: 'Our classic hearty shrimp burrito',
                base_price: 8.95,
                modifiers: ['size', 'tortilla', 'beans', 'cheese', 'other toppings', 'salsa', 'spice level', 'extras'],
                calories: { min: 450, max: 1210 },
                featured: false,
                selected_modifiers: []
            },
            {
                id: 431551,
                name: 'Haddock Burrito',
                category: 'Burritos',
                description: 'Our classic hearty haddock burrito',
                base_price: 8.95,
                modifiers: ['size', 'tortilla', 'beans', 'cheese', 'other toppings', 'salsa', 'spice level', 'extra'],
                calories: { min: 550, max: 1370 },
                featured: false,
                selected_modifiers: []
            },
            {
                id: 431552,
                name: 'Halibut Burrito',
                category: 'Burritos',
                description: 'Our classic hearty halibut burrito',
                base_price: 8.95,
                modifiers: ['size', 'tortilla', 'beans', 'cheese', 'other toppings', 'salsa', 'spice level', 'extra'],
                calories: { min: 520, max: 1300 },
                featured: false,
                selected_modifiers: []
            }
        ],
        item_modifiers: [
            {
                id: 150,
                name: 'size',
                options: [
                    {
                        name: 'small',
                        price: 5.87
                    },
                    {
                        name: 'large',
                        price: 7.00
                    },
                    {
                        name: 'small + chipz & drink combo',
                        price: 8.42
                    },
                    {
                        name: 'large + chipz & drink combo',
                        price: 9.54
                    }
                ]
            },
            {
                id: 151,
                name: 'tortilla',
                options: [
                    {
                        name: 'White Tortilla (300 cal)',
                        price: 0
                    },
                    {
                        name: 'Whole Wheat Tortilla (280 cal)',
                        price: 0
                    }
                ]
            },
            {
                id: 152,
                name: 'beans',
                options: [
                    {
                        name: 'Add Beans',
                        price: 0
                    },
                    {
                        name: 'No Beans',
                        price: 0
                    }
                ]
            },
            {
                id: 153,
                name: 'cheese',
                options: [
                    {
                        name: 'Tri-Blend Cheese',
                        price: 0
                    },
                    {
                        name: 'Substitute Cheese with Guacamole',
                        price: 0
                    },
                    {
                        name: 'No Cheese',
                        price: 0
                    }
                ]
            },
            {
                id: 154,
                name: 'other toppings',
                options: [
                    {
                        name: 'All Toppings (645 - 745 cal)',
                        price: 0
                    },
                    {
                        name: 'Mexican Rice (100 - 200 cal)',
                        price: 0
                    },
                    {
                        name: 'Lettuce (5 cal)',
                        price: 0
                    },
                    {
                        name: 'Tomato (10 cal)',
                        price: 0
                    },
                    {
                        name: 'Bell Peppers (5 cal)',
                        price: 0
                    },
                    {
                        name: 'Green Onions (5 cal)',
                        price: 0
                    },
                    {
                        name: 'Red Onions (5 cal)',
                        price: 0
                    },
                    {
                        name: 'Corn (10 cal)',
                        price: 0
                    },
                    {
                        name: 'Mango Coleslaw',
                        price: 0
                    },
                    {
                        name: 'Jalapeños (5 cal)',
                        price: 0
                    },
                    {
                        name: 'Cilantro',
                        price: 0
                    },
                    {
                        name: 'Guacamole (140 cal)',
                        price: 0.89
                    },
                    {
                        name: 'Burrito Sauce (50 cal)',
                        price: 0
                    },
                    {
                        name: 'Sour Cream (15 cal)',
                        price: 0
                    }
                ]
            },
            {
                id: 155,
                name: 'salsa',
                options: [
                    {
                        name: 'Add Salsa',
                        price: 0
                    },
                    {
                        name: 'No Salsa',
                        price: 0
                    }
                ]
            },
            {
                id: 156,
                name: 'spice level',
                options: [
                    {
                        name: 'No Spice',
                        price: 0
                    },
                    {
                        name: 'Lil\' Spice - 1 Dot (1 cal)',
                        price: 0
                    },
                    {
                        name: 'Medium Spice - 3 Dot (5 cal)',
                        price: 0
                    },
                    {
                        name: 'Hot - 5 Dot (5 cal)',
                        price: 0
                    },
                    {
                        name: 'XXX Hot - 1 line (10 cal)',
                        price: 0
                    },
                    {
                        name: 'XXX Hot - 2 line (20 cal)',
                        price: 0
                    },
                    {
                        name: 'XXX Hot - 3 line (30 cal)',
                        price: 0
                    }
                ]
            },
            {
                id: 157,
                name: 'extras',
                options: [
                    {
                        name: 'Extra Cheese (90 cal)',
                        price: 1.09
                    },
                    {
                        name: 'Extra Guacamole (140 cal)',
                        price: 0.89
                    },
                    {
                        name: 'Add Lime (10 cal)',
                        price: 0.37
                    },
                    {
                        name: 'Nacho Cheese',
                        price: 1.52
                    },
                    {
                        name: '4oz Calamari (130 cal)',
                        price: 4.49
                    },
                    {
                        name: '4oz Halibut (336 cal)',
                        price: 4.49
                    },
                    {
                        name: '4oz Shrimp (150 cal)',
                        price: 4.49
                    },
                    {
                        name: '4oz Pulled Pork (160 cal)',
                        price: 3.82
                    },
                    {
                        name: '4oz Steak (340 cal)',
                        price: 3.82
                    },
                    {
                        name: '4oz Haddock (366 cal)',
                        price: 4.49
                    },
                    {
                        name: '4oz Chicken (230 cal)',
                        price: 3.82
                    },
                    {
                        name: '4oz Veggie Soy (75 cal)',
                        price: 2.49
                    },
                    {
                        name: '4oz Sweet Potato (120 cal)',
                        price: 1.91
                    }
                ]
            }
        ]
    });
    const order = React.useState({
        location: null,
        items: []
    });
    return(
        <Context.Provider value={{widget: widget, restaurant: restaurant, order: order}}>
            {props.children}
        </Context.Provider>
    );
}