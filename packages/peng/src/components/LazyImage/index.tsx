import {FunctionComponent} from "react";
import {LazyLoadImage, LazyLoadImageProps} from 'react-lazy-load-image-component';

export const LazyImage: FunctionComponent<LazyLoadImageProps> = (props) => (
        <LazyLoadImage
            {...props}
            alt={props.alt}
            height={props.height}
            src={props.src} // use normal <img> attributes as props
            width={props.width}
        />
    )
