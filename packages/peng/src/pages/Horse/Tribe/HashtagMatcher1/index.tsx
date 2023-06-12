import React from 'react';
import {HashtagProps, HASHTAG_PATTERN} from "interweave-autolink";
import { ChildrenNode, Matcher, MatchResponse, Node } from 'interweave';
import { Hashtag } from './Hashtag/Hashtag';

export type HashtagMatch = Pick<HashtagProps, 'hashtag'>;

export class HashtagMatcher1 extends Matcher<HashtagProps> {
    // eslint-disable-next-line class-methods-use-this
    replaceWith(children: ChildrenNode, props: HashtagProps): Node {
        return React.createElement(Hashtag, props, children);
    }

    // eslint-disable-next-line class-methods-use-this
    asTag(): string {
        return 'a';
    }

    // eslint-disable-next-line class-methods-use-this
    match(string: string): MatchResponse<HashtagMatch> | null {
        return this.doMatch(string, HASHTAG_PATTERN, (matches) => ({
            hashtag: matches[0],
        }));
    }
}