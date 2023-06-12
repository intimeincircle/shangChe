// import {ReactNode, PureComponent} from "react";
// import {LoginAuthError} from "kun-tools/built/common/error";
// import {
//     Modal,
//     ModalOverlay,
//     ModalFooter,
//     ModalBody,
//     ModalContent,
//     ModalHeader,
//     ModalCloseButton,
//     Button
// } from "@chakra-ui/react"
//
// interface Props {
//
//     children?: ReactNode;
// }
//
// interface State {
//     error: Error | null;
//     errorInfo: { componentStack: string } | null;
//     login: boolean
// }
//
// export default class ErrorBoundary extends PureComponent<Props, State> {
//
//     constructor(props: Props) {
//         super(props);
//
//         this.state = {error: null, errorInfo: null, login: false};
//     }
//
//     componentDidCatch(error: Error, errorInfo: { componentStack: string }): void {
//         // Catch errors in any components below and re-render with error message
//         console.log('error xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx in error boundary', error);
//
//         if (error instanceof LoginAuthError) {
//             this.setState({error, errorInfo, login: true});
//         } else {
//             console.log('error1', error);
//             this.setState({error, errorInfo});
//         }
//     }
//
//
//     render(): ReactNode {
//         const {children} = this.props;
//         const {errorInfo, error, login} = this.state;
//
//         return (
//             <>
//                 {
//                     login === true && (
//                         <Modal
//                             isCentered
//                             onClose={() => {
//                                 this.setState({errorInfo, error, login: false})
//                             }}
//                             isOpen={login}
//                             motionPreset="slideInBottom"
//                         >
//                             <ModalOverlay/>
//                             <ModalContent>
//                                 <ModalHeader>Modal Title</ModalHeader>
//                                 <ModalCloseButton/>
//                                 <ModalBody>
//                                     <h1>d鞥路ssssssssssssss</h1>
//                                 </ModalBody>
//                                 <ModalFooter>
//                                     <Button colorScheme="blue" mr={3} onClick={() => {
//                                         this.setState({errorInfo, error, login: false})
//                                     }}>
//                                         Close
//                                     </Button>
//                                     <Button variant="ghost">Secondary Action</Button>
//                                 </ModalFooter>
//                             </ModalContent>
//                         </Modal>
//                     )
//                 }
//
//                 {
//                     children
//                 }
//             </>
//         )
//
//         // If there's an error, render error path
//         // return errorInfo ? (
//         //   <div data-testid="error-view">
//         //     <h2>Something went wrong.</h2>
//         //     <details style={{ whiteSpace: "pre-wrap" }}>
//         //       {error && error.toString()}
//         //       <br />
//         //       {errorInfo.componentStack}
//         //     </details>
//         //   </div>
//         // ) : (
//         //   children || null
//         // );
//     }
// }
