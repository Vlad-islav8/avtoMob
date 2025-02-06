import { createReducer } from '@reduxjs/toolkit'
import { loadCars, SearhUpdateText, filterCars, setFormData, resetForm, setFormErrors } from './action'

import jsonCars from './cars.json'
import choise from '../assets/choice.svg'
import check from '../assets/check.svg'
import paperwork from '../assets/paperwork.svg'
const initialState = {
    allCars: [],
    Faq: [
        {
            question: "Как узнать наличие автомобиля?",
            answer:
                "Вы можете посмотреть наличие автомобилей на нашем сайте или позвонить нам по телефону.",
        },
        {
            question: "Как оформить покупку?",
            answer:
                "Для оформления покупки вам нужно связаться с нашим менеджером, который поможет вам с выбором и оформлением всех документов.",
        },
        {
            question: "Какие документы нужны для покупки?",
            answer: "Для оформления покупки автомобиля вам понадобится паспорт, водительское удостоверение (если есть) и номер ИНН.",
        },
        {
            question: "Могу ли я обменять свой старый автомобиль на новый?",
            answer: "Да, мы принимаем автомобили в зачет по программе Trade-in. Свяжитесь с нашими менеджерами для оценки вашего автомобиля."
        }
    ],
    reviews: [
        {
            name: 'Иван Иванов',
            text: 'Отличный сервис и качественные автомобили. Рекомендую!',
            rating: 5,
        },
        {
            name: 'Мария Петрова',
            text: 'Быстро подобрали нужный мне автомобиль, очень довольна!',
            rating: 4,
        },
        {
            name: 'Сергей Николаев',
            text: 'Все отлично. Ребята помогли подобрать машину, всем доволен!',
            rating: 5,
        },
        {
            name: 'Анна Смирнова',
            text: 'Рекомендую этот сайт, купила здесь свою машину, все супер!',
            rating: 4,
        },
        {
            name: 'Елена Козлова',
            text: 'Профессиональный подход, помогли с выбором и оформлением документов. Спасибо!',
            rating: 5,
        },
        {
            name: 'Дмитрий Сидоров',
            text: 'Хороший выбор автомобилей с пробегом, нашел то, что искал.',
            rating: 4,
        },
        {
            name: 'Ольга Васильева',
            text: 'Приятный персонал, помогли с выбором машины, очень вежливые.',
            rating: 5,
        },
        {
            name: 'Алексей Морозов',
            text: 'Все прошло гладко и быстро, доволен покупкой!',
            rating: 4,
        },
        {
            name: 'Наталья Федорова',
            text: 'Очень удобный сайт, легко нашла нужную мне машину!',
            rating: 5,
        },
        {
            name: 'Андрей Тихонов',
            text: 'Рекомендую, большой выбор и адекватные цены.',
            rating: 4,
        },
        {
            name: 'Светлана Павлова',
            text: 'Мне очень понравился сервис, буду рекомендовать друзьям.',
            rating: 5,
        },
        {
            name: 'Михаил Соколов',
            text: 'Хорошие автомобили, все честно и прозрачно.',
            rating: 4,
        },
        {
            name: 'Екатерина Антонова',
            text: 'Сайт удобный, много хороших предложений, всем советую!',
            rating: 5,
        },
        {
            name: 'Роман Игнатов',
            text: 'Быстрая и качественная работа менеджеров, благодарен!',
            rating: 4,
        },
        {
            name: 'Татьяна Никитина',
            text: 'Отличный сервис, все очень быстро, довольна покупкой!',
            rating: 5,
        },
        {
            name: 'Виктор Кузнецов',
            text: 'Помогли подобрать автомобиль под мой бюджет, спасибо!',
            rating: 4,
        },
        {
            name: 'Анастасия Лебедева',
            text: 'Очень вежливые и профессиональные сотрудники, помогли с оформлением.',
            rating: 5,
        },
        {
            name: 'Павел Волков',
            text: 'Большой выбор, каждый найдет что-то для себя.',
            rating: 4,
        },
        {
            name: 'Юлия Орлова',
            text: 'Рекомендую этот сайт всем, кто ищет хороший автомобиль!',
            rating: 5,
        },
        {
            name: 'Денис Зайцев',
            text: 'Хороший сервис и быстрый ответ от поддержки, все супер!',
            rating: 4,
        },
    ],
    steps: [
        {
            icon: choise,
            title: 'Выбор автомобиля',
            description: 'Поможем вам подобрать идеальный автомобиль с пробегом, учитывая ваши потребности и бюджет.',
        },
        {
            icon: check,
            title: 'Проверка автомобиля',
            description: 'Проводим тщательную проверку технического состояния каждого автомобиля перед продажей.',
        },
        {
            icon: paperwork,
            title: 'Оформление сделки',
            description: 'Быстрое и надежное оформление сделки купли-продажи с гарантией юридической чистоты.',
        },
    ],
    searchText: '',
    currentFilters: {
        price: { min: '', max: '' },
        year: { min: '', max: '' },
        km_age: { min: '', max: '' },
        mark: '',
        body_type: '',
        transmission: '',
        drive_type: '',
        engine_type: '',
        color: '',
        no_accidents: false,
        source: '',
        wheel: '',
        region: '',
        city: ''
    },
    contactsData: [
        {
            id: 1,
            name: 'Иван Петров',
            position: 'Менеджер по продажам',
            email: 'ivan@example.com',
            phone: '+7 (999) 123-45-67',
            photo: 'https://avatars.mds.yandex.net/i?id=c4483866686765975f54f4ab3fab818c_l-9236689-images-thumbs&n=13'
        },
        {
            id: 2,
            name: 'Анна Сидорова',
            position: 'Маркетолог',
            email: 'anna@example.com',
            phone: '+7 (999) 987-65-43',
            photo: 'https://avatars.mds.yandex.net/i?id=dd19b3ceef95d377a053811df8495423d045dc30-8455323-images-thumbs&n=13'
        },
        {
            id: 3,
            name: 'Михаил Козлов',
            position: 'Технический директор',
            email: 'mikhail@example.com',
            phone: '+7 (999) 456-78-90',
            photo: 'https://avatars.mds.yandex.net/i?id=3d7888d02a2f237b1109604065c0a3da_l-10636720-images-thumbs&n=13'
        }
    ],
    locationData:
    {
        address: 'ул. Пушкина, д. 10',
        city: 'Москва',
        postalCode: '123456',
        phone: '+7 (999) 123-45-67',
        email: 'info@company.com',
        workHours: 'Пн-Пт: 9:00 - 18:00',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5887638669847!2d37.618!3d55.756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIxLjYiTiAzN8KwMzcnMDQuOCJF!5e0!3m2!1sru!2sru!4v1234567890'
    },
    formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
    },
    formErrors: {},

}

// Функция для обработки данных
const processCars = (cars) => {
    return cars.map(car => ({
        ...car,
        image_urls: typeof car.image_urls === 'string'
            ? JSON.parse(car.image_urls)
            : car.image_urls,
    }));
};

// Функция для удаления дубликатов
const getUniqueCars = (cars) => {
    const uniqueCarsMap = new Map();
    cars.forEach(car => {
        const key = JSON.stringify(car); // или car.id, если есть уникальное поле
        if (!uniqueCarsMap.has(key)) {
            uniqueCarsMap.set(key, car);
        }
    });
    return Array.from(uniqueCarsMap.values());
};

export const carsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loadCars, (state) => {
            const cars = jsonCars["Лист 1"];
            const processedCars = processCars(cars);
            const uniqueAllCars = getUniqueCars(processedCars);
            state.allCars = uniqueAllCars;
        })
        .addCase(SearhUpdateText, (state, action) => {
            state.searchText = action.payload;
            const cars = jsonCars["Лист 1"];
            const searchTerms = action.payload.toLowerCase().split(' ');

            let filteredCars = processCars(cars);

            // Применяем поисковый фильтр
            if (action.payload) {
                filteredCars = filteredCars.filter((el) => {
                    const mark = String(el.mark || '').toLowerCase();
                    const model = String(el.model || '').toLowerCase();
                    const fullCarName = `${mark} ${model}`;
                    return searchTerms.every(term => fullCarName.includes(term));
                });
            }

            // Применяем остальные фильтры
            filteredCars = applyFilters(filteredCars, state.currentFilters);

            state.allCars = filteredCars;
        })
        .addCase(filterCars, (state, action) => {
            state.currentFilters = action.payload;
            const cars = jsonCars["Лист 1"];
            let filteredCars = processCars(cars);

            // Сначала применяем поисковый фильтр
            if (state.searchText) {
                const searchTerms = state.searchText.toLowerCase().split(' ');
                filteredCars = filteredCars.filter((el) => {
                    const mark = String(el.mark || '').toLowerCase();
                    const model = String(el.model || '').toLowerCase();
                    const fullCarName = `${mark} ${model}`;
                    return searchTerms.every(term => fullCarName.includes(term));
                });
            }

            // Затем применяем остальные фильтры
            filteredCars = applyFilters(filteredCars, action.payload);

            state.allCars = filteredCars;
        })
        .addCase(setFormData, (state, action) => {
            state.formData = {
                ...state.formData,
                [action.payload.name]: action.payload.value
            };
            // Очищаем ошибку при вводе
            if (state.formErrors[action.payload.name]) {
                state.formErrors = {
                    ...state.formErrors,
                    [action.payload.name]: ''
                };
            }
        })
        .addCase(setFormErrors, (state, action) => {
            state.formErrors = action.payload;
        })
        .addCase(resetForm, (state) => {
            state.formData = {
                name: '',
                email: '',
                phone: '',
                message: ''
            };
            state.formErrors = {};
        })
        
});

// Выносим логику фильтрации в отдельную функцию
function applyFilters(cars, filters) {
    return cars.filter(car => {
        // Проверка цены
        if (filters.price.min && car.price_rub < Number(filters.price.min)) return false;
        if (filters.price.max && car.price_rub > Number(filters.price.max)) return false;

        // Проверка года
        if (filters.year.min && car.year < Number(filters.year.min)) return false;
        if (filters.year.max && car.year > Number(filters.year.max)) return false;

        // Проверка пробега
        if (filters.km_age.min && car.km_age < Number(filters.km_age.min)) return false;
        if (filters.km_age.max && car.km_age > Number(filters.km_age.max)) return false;

        // Проверка типа кузова
        if (filters.body_type && car.body_type !== filters.body_type) return false;

        // Проверка коробки передач
        if (filters.transmission && car.transmission !== filters.transmission) return false;

        // Проверка привода
        if (filters.drive_type && car.drive_type !== filters.drive_type) return false;

        // Проверка ДТП
        if (filters.no_accidents && !car.no_accidents) return false;

        // Проверка источника
        if (filters.source) {
            const id = String(car.id || car.inner_id);
            const source = id.length === 7 ? 'auto.ru' :
                id.length === 10 ? 'avito.ru' :
                    id.length === 8 ? 'drom.ru' : '';
            if (filters.source !== source) return false;
        }

        // Проверка цвета
        if (filters.color && car.color?.toLowerCase() !== filters.color.toLowerCase()) return false;

        // Проверка руля
        if (filters.wheel && car.wheel?.toLowerCase() !== filters.wheel.toLowerCase()) return false;

        // Проверка региона
        if (filters.region && !car.region?.toLowerCase().includes(filters.region.toLowerCase())) return false;

        // Проверка города
        if (filters.city && !car.city?.toLowerCase().includes(filters.city.toLowerCase())) return false;

        return true;
    });
}