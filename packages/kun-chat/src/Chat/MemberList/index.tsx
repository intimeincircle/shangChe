// import {FunctionComponent} from "react";

export const a = 1;

//
// import {
//     MemberList,
// } from "@pubnub/react-chat-components";
//
// export const MembersList : FunctionComponent = () => {
//
//
//     return (
//         <MemberList
//             members={[
//                 {
//                     custom: {
//                         title: 'Office Assistant'
//                     },
//                     eTag: 'AYGyoY3gre71eA',
//                     email: null,
//                     externalId: null,
//                     id: 'user_63ea15931d8541a3bd35e5b1f09087dc',
//                     name: 'Mark Kelley',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
//                     updated: '2020-09-23T09:23:34.598494Z'
//                 },
//                 {
//                     custom: {
//                         title: 'VP Marketing'
//                     },
//                     eTag: 'AZDyqJ7andTHlAE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_3c4400761cba4b65b77b6cae55fc21eb',
//                     name: 'Anna Gordon',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
//                     updated: '2020-09-23T09:23:33.598365Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Environmental Tech'
//                     },
//                     eTag: 'AeTqgs2X16ql2wE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_def709b1adfc4e67b98bb7a820f581b1',
//                     name: 'Luis Griffin',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
//                     updated: '2020-09-23T09:23:31.809198Z'
//                 },
//                 {
//                     custom: {
//                         title: 'VP Sales'
//                     },
//                     eTag: 'Acmf1d+vmczaKw',
//                     email: null,
//                     externalId: null,
//                     id: 'user_a56c20222c484ff8987ec9b69b0c8f5b',
//                     name: 'Sue Flores',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
//                     updated: '2020-09-23T09:23:31.837372Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Product Engineer'
//                     },
//                     eTag: 'AczQlJSt5Zn9jAE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_e0e43601f93249c382415521188f0208',
//                     name: 'Luke Young',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
//                     updated: '2020-09-23T09:23:36.617721Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Engineer'
//                     },
//                     eTag: 'AZSThaqOxP67Rg',
//                     email: null,
//                     externalId: null,
//                     id: 'user_ed145d8b0f094b83a2d51d428a59d0cb',
//                     name: 'Jenny Porter',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
//                     updated: '2020-09-23T09:23:32.810646Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Actuary'
//                     },
//                     eTag: 'AeGljfOQhoCH9AE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_732277cad5264ed48172c40f0f008104',
//                     name: 'Ethan Murray',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
//                     updated: '2020-09-23T09:23:33.586556Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Professor'
//                     },
//                     eTag: 'AYi09PWh7/eyowE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_142da3c419804a82a3057cedc86acaa6',
//                     name: 'Victoria Torres',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
//                     updated: '2020-09-23T09:23:34.284924Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Environmental Tech'
//                     },
//                     eTag: 'AcXb44a+3tLrTg',
//                     email: null,
//                     externalId: null,
//                     id: 'user_0149372b160544cf981b6284dd2b5e45',
//                     name: 'Caleb Nichols',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
//                     updated: '2020-09-23T09:23:36.518618Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Registered Nurse'
//                     },
//                     eTag: 'AZTSoo3LkIPGCA',
//                     email: null,
//                     externalId: null,
//                     id: 'user_47557ad75d4047efab1b6577cec3efe7',
//                     name: 'Cathy Grant',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
//                     updated: '2020-09-23T09:23:36.50655Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Health Coach'
//                     },
//                     eTag: 'AbH9z9zTttLciwE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_7261c27b34954ece93ac0d8a15520591',
//                     name: 'Rafael Gardner',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
//                     updated: '2020-09-23T09:23:33.821448Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Mechanical Systems Engineer'
//                     },
//                     eTag: 'AaLhhI6p192/jgE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_a673547880824a0687b3041af36a5de4',
//                     name: 'Heather Mason',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
//                     updated: '2020-09-23T09:23:31.841481Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Compensation Analyst'
//                     },
//                     eTag: 'AYzmn9ST0rKCrgE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_4e2f18aba20640cf922c8bc485941f8e',
//                     name: 'Raul Day',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
//                     updated: '2020-09-23T09:23:36.322654Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Help Desk Technician'
//                     },
//                     eTag: 'AcHyhfyn5syQ/gE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_f32ea4a710104c06ad5858b0e22cfc88',
//                     name: 'Ethel Barnett',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/7.jpg',
//                     updated: '2020-09-23T09:23:33.871708Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Social Worker'
//                     },
//                     eTag: 'AYG7mdvtxJO2CQ',
//                     email: null,
//                     externalId: null,
//                     id: 'user_8e92a37f342b482facd1eebbd782006a',
//                     name: 'Lucas Boyd',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
//                     updated: '2020-09-23T09:23:34.296878Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Software Engineer'
//                     },
//                     eTag: 'AeiApdiFiom1+AE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_efc5b3ef96ea4bffbde733e249c8cbb3',
//                     name: 'Ellen Harvey',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
//                     updated: '2020-09-23T09:23:33.942047Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Registered Nurse'
//                     },
//                     eTag: 'AcaEgNaSzcuovQE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_2ada61d287aa42b59d620c474493474f',
//                     name: 'Bradley Chapman',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
//                     updated: '2020-09-23T09:23:31.804995Z'
//                 },
//                 {
//                     custom: {
//                         title: 'VP Product Management'
//                     },
//                     eTag: 'AZuJzrKo5NP6Kw',
//                     email: null,
//                     externalId: null,
//                     id: 'user_0a0579891c7148009ec254f7ae2e6367',
//                     name: 'Meghan Franklin',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
//                     updated: '2020-09-23T09:23:32.747753Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Pharmacist'
//                     },
//                     eTag: 'AZuf4vDb7seI9AE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_f5735bcc168445c38978e46969bc0019',
//                     name: 'Armando Coleman',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
//                     updated: '2020-09-23T09:23:33.2179Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Desktop Support Technician'
//                     },
//                     eTag: 'AZi01cCxr8eo5AE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_912210948aa849eda2c3e0c2b58355e6',
//                     name: 'Sue Jones',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
//                     updated: '2020-09-23T09:23:34.54631Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Sales Representative'
//                     },
//                     eTag: 'AYz+8bLNmqnmJg',
//                     email: null,
//                     externalId: null,
//                     id: 'user_d43bfea6e4234f84ab377d664edf2576',
//                     name: 'Caleb Tucker',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
//                     updated: '2020-09-23T09:23:33.064427Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Account Executive'
//                     },
//                     eTag: 'AZ6VvZ23q/yDKA',
//                     email: null,
//                     externalId: null,
//                     id: 'user_fb9ca56c8d3547268f2d589a6fcb1556',
//                     name: 'Courtney Miles',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/11.jpg',
//                     updated: '2020-09-23T09:23:36.59231Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Account Executive'
//                     },
//                     eTag: 'AcevkZXQ3pmshAE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_5500315bf0a34f9b9dfa0e4fffcf49c2',
//                     name: 'Patrick Simpson',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
//                     updated: '2020-09-23T09:23:32.184222Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Technical Writer'
//                     },
//                     eTag: 'Ad2mzoKft7HsWQ',
//                     email: null,
//                     externalId: null,
//                     id: 'user_0368d27f4d514079bc5cfd5678ec1fe7',
//                     name: 'Marie Harper',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
//                     updated: '2020-09-23T09:23:32.180254Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Product Engineer'
//                     },
//                     eTag: 'Ad/X1fzkiOTFzwE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_83647bfb6bcd412d93b1e57e1b602d3a',
//                     name: 'Tom Martinez',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
//                     updated: '2020-09-23T09:23:31.848064Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Staff Scientist'
//                     },
//                     eTag: 'AaTXkO3chPGd3AE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_1bc564bcaa4a476e8392c4c8e2b92983',
//                     name: 'Martha Ward',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/13.jpg',
//                     updated: '2020-09-23T09:23:33.484384Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Nurse Practicioner'
//                     },
//                     eTag: 'Acyi+ufEqbOT7QE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_608169810dc143998c7964485415a5c7',
//                     name: 'Stephen West',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/14.jpg',
//                     updated: '2020-09-23T09:23:33.606653Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Compensation Analyst'
//                     },
//                     eTag: 'AfqrqJ3otvCk8QE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_4190b08bba444ec58beda6637361cfdb',
//                     name: 'Claudia Andrews',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
//                     updated: '2020-09-23T09:23:33.612298Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Registered Nurse'
//                     },
//                     eTag: 'AYjs1ImXqfrDqQE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_363d9255193e45f19513f4bfa9901fbe',
//                     name: 'Jon Warren',
//                     profileUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
//                     updated: '2020-09-23T09:23:33.480424Z'
//                 },
//                 {
//                     custom: {
//                         title: 'Programmer'
//                     },
//                     eTag: 'AZuL1I+IxJPm4gE',
//                     email: null,
//                     externalId: null,
//                     id: 'user_4ec689d24845466e93ee358c40358473',
//                     name: 'Veronica Barrett',
//                     profileUrl: 'https://randomuser.me/api/portraits/women/15.jpg',
//                     updated: '2020-09-23T09:23:31.819548Z'
//                 }
//             ]}
//         />
//     )
// }
