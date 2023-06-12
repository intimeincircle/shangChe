import {FunctionComponent} from "react";
import {Link as RouteLink} from "react-router-dom";
import {LinkProps} from "@chakra-ui/react";
import {createStyles} from "@mantine/core";

const useStyles = createStyles(() => ({
    root: {
        width: 'max-content'
    },
}));

export const KLink: FunctionComponent<LinkProps> = ({children, href}) =>  {

    const classes = useStyles()
    return (<RouteLink to={href ?? '#'} style={{ width: 'max-width'}} className={classes.classes.root}>
        {
            children
        }
    </RouteLink>)
}
