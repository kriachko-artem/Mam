import pict1 from './../components/BaseLayout/VisitUs/images/first.png'
import pict2 from './../components/BaseLayout/VisitUs/images/second.png'

export const sidebarData = [
    {
        id: 1,
        navLink: "What's on",
        list: [
            {'Exhibitions': {picture: pict1}},
            {'Events': {picture: pict2}}
        ],
        picture: pict1,
    },
    {
        id: 2,
        navLink: "Visit",
        list: [
            {'Plan Your Trip': {picture: pict1}},
            {'Kids & Families': {picture: pict2}},
            {'Shop': {picture: pict1}},
            {'Eat': {picture: pict2}},
            {'School Visits': {picture: pict1}},
            {'Venue Hire': {picture: pict2}},
        ],
        // picture: pict,
    },
    {
        id: 3,
        navLink: "Explore",
        list: [
            {'Collection': {picture: pict1}},
            {'Exhibition Archive': {picture: pict2}}
        ],
        // picture: pict,
    },
    {
        id: 4,
        navLink: "Classes",
        list: [
            {'Short Courses': {picture: pict1}},
            {'Workshops': {picture: pict2}},
            {'Kids & Teens': {picture: pict1}},
        ],
        // picture: pict,
    },
    {
        id: 5,
        navLink: "Support",
        list: [
            {'Donate': {picture: pict1}},
            {'Thank You': {picture: pict2}},
            {'Art Foundation': {picture: pict1}},
            {'Members': {picture: pict2}},
            {'Volunteers': {picture: pict1}},
        ],
        // picture: pict,
    },
    {
        id: 6,
        navLink: "About",
        list: [
            {'People': {picture: pict1}},
            {'Board': {picture: pict2}},
            {'History': {picture: pict1}},
            {'National Photography Prize': {picture: pict2}},
            {'Careers': {picture: pict1}},
            {'Media': {picture: pict2}},
            {'Contact': {picture: pict1}},
        ],
        // picture: pict,
    }
];