/* eslint-disable */
import { AtomicProps } from '@fower/atomic-props';

type AtomicPropsA  = AtomicProps & {
    formInput: boolean
}

declare module 'react' {
    interface HTMLAttributes<T> extends AtomicPropsA  {

    }
}

declare module '*.png';
declare module '*.css';

