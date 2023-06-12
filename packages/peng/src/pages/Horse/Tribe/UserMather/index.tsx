import React from 'react';
import {combinePatterns} from "interweave-autolink";
import { ChildrenNode, Matcher, MatchResponse, Node } from 'interweave';
import {LinkProps} from "interweave-autolink/src/types";
import {UserMember} from '../HashtagMatcher1/Hashtag/Hashtag';

export interface MemberProps extends Partial<LinkProps> {
    children: ChildrenNode;
    // encodeHashtag?: boolean;
    userName: string
    memberParts: {
        userId: string;
        userUrl?: string | ((hashtag: string) => string);
    }
    // preserveHash?: boolean;
}

export type MemberMatch = Pick<MemberProps, 'userName' | 'memberParts'>;

export const NON_LATIN = [
    // Chinese
    /[\d_\u4E00-\u9FFF-]+/,
    // Japanese
    /[\d_\u3000-\u30FF-]+/,
    // Korean
    /[\d_\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7FF-]+/,
    // Thai
    /[\d_\u0E00-\u0E7F-]+/,
    // Russian, Ukrainian
    // eslint-disable-next-line no-misleading-character-class
    /[\d_a-z\u0400-\u052F\u1C80-\u1C8F\u2DE0-\u2DFF\uA640-\uA69F-]+/,
    // Latin based
    /[\d_a-z\u0080-\u00FF\u0100-\u017F\u0180-\u024F-]+/,
];

export const EMAIL_USERNAME1 = combinePatterns(
    [
        /@/,
        /\[/,
        combinePatterns(NON_LATIN, {
            capture: true,
            join: '|',
        }),
        /\]/,
        /\(/,
        combinePatterns([
            /[a-z-0-9]{32,36}/], {
                capture: true,
            }
        ),
        /\)/
    ],
    {
        capture: true,
    },
);

export class UserMatcher1 extends Matcher<MemberProps> {
    // eslint-disable-next-line class-methods-use-this
    replaceWith(children: ChildrenNode, props: MemberProps): Node {
        return React.createElement(UserMember, props, children);
    }

    // eslint-disable-next-line class-methods-use-this
    asTag(): string {
        return 'a';
    }

    // eslint-disable-next-line class-methods-use-this
    match(string: string): MatchResponse<MemberMatch> | null {
        console.log('string', string);
        return this.doMatch(string, EMAIL_USERNAME1, (matches) => {
            console.log('matches', matches)
            return ({
                userName:  matches[2],
                memberParts: {
                    userId: matches[3],
            }})});
    }
}
