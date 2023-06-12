// import {ThemeProvider, Avatar, MessageGroup, Message, MessageText} from "@livechat/ui-kit"
// import {FunctionComponent} from "react";
// import {ChannelList} from "../ChannelList";
// import {useStore} from "../Context";
//
// export const ChatContainer: FunctionComponent = () => {
//     const bears = useStore(state => state.profile)
//
//     console.log('oook');
//
//     return (
//         <ThemeProvider>
//             <ChannelList/>
//             {bears?.nickName ?? 'nickName'}
//             <MessageGroup
//                 avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
//                 onlyFirstWithMeta
//             >
//                 <Message authorName="Jon Smith" date="21:37">
//                     <MessageText>Hey my friend!</MessageText>
//                 </Message>
//                 <Message authorName="Jon Smith" date="21:37">
//                     <MessageText>Hi!</MessageText>
//                 </Message>
//                 <Message authorName="Jon Smith" date="21:37">
//                     <MessageText>Hello, are you there?</MessageText>
//                 </Message>
//             </MessageGroup>
//             <Avatar
//                 imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
//             />
//         </ThemeProvider>
//     )
// }