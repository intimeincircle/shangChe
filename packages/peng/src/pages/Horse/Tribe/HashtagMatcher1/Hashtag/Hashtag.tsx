import {HashtagProps, Link} from 'interweave-autolink';
import React from 'react';
import {MemberProps} from "../../UserMather";

export function UserMember({
                               children,
                               userName,
                               memberParts,
                               // encodeHashtag = false,
                               // hashtag,
                               // hashtagUrl = '{{hashtag}}',
                               // preserveHash = false,
                               ...props
                           }: MemberProps) {
    // let tag = hashtag;
    //
    // // Prepare the hashtag
    // if (!preserveHash && tag.startsWith('#')) {
    //     tag = tag.slice(1);
    // }
    //
    // if (encodeHashtag) {
    //     tag = encodeURIComponent(tag);
    // }
    //
    // // Determine the URL
    // let url = hashtagUrl || '{{hashtag}}';
    //
    // url = typeof url === 'function' ? url(tag) : url.replace('{{hashtag}}', tag);
    console.log('userName', userName);

    return (
        <Link {...props} href={`/live/user/${memberParts.userId.replaceAll('-', '')}`}>
            {userName}
        </Link>
    );
}

export function Hashtag({
                            children,
                            encodeHashtag = false,
                            hashtag,
                            hashtagUrl = '{{hashtag}}',
                            preserveHash = false,
                            ...props
                        }: HashtagProps) {
    let tag = hashtag;

    // Prepare the hashtag
    if (!preserveHash && tag.startsWith('#')) {
        tag = tag.slice(1);
    }

    if (encodeHashtag) {
        tag = encodeURIComponent(tag);
    }

    // Determine the URL
    let url = hashtagUrl || '{{hashtag}}';

    url = typeof url === 'function' ? url(tag) : url.replace('{{hashtag}}', tag);

    return (
        <Link {...props} href={url}>
            {children}
        </Link>
    );
}