import { AtomicProps } from '@fower/atomic-props';

declare module 'react' {
    type HTMLAttributes<T> = AtomicProps
}