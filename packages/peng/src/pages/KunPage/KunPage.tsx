/** @jsxImportSource @emotion/react */
import {NotionRenderer} from 'react-notion-x'
import {NotionBlock} from "@9gustin/react-notion-render/dist/types/NotionBlock";
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import '@9gustin/react-notion-render/dist/index.css'
import {Render} from '@9gustin/react-notion-render'
import {useMemo, memo} from "react";
import {useLocation} from "react-router";

import {Helmet} from "react-helmet";
import {
    Flex,
    useColorModeValue,
    Container,
    Button, Link,
} from '@chakra-ui/react';
import {useMutation, useQuery} from "react-query";
import {kunInhabitant} from "kun-shared/built/src_managed/kun";
import {ExtendedRecordMap} from "notion-types";
import {getQueryKunDetail, mockFetchQuery} from "../../react-query/core";
import {Header} from "../../components/Header";
import {listContentInSymbol, requestv2ConcernStatus, requestv2CreateConcern} from "../../apis/web";
import {goToUser} from "../../navigators";
import {useQueryParams} from "../../app/params";
import {ReactQueryKeys} from "../../shared/context";
import {defaultApi} from "../../react-query/api";

const block = {
    "object": "list",
    "results": [
        {
            "object": "block",
            "id": "ba996dec-83f2-49b1-ba68-60a3a5ae8fdb",
            "created_time": "2021-05-23T18:00:16.286Z",
            "last_edited_time": "2021-05-23T18:02:00.000Z",
            "has_children": false,
            "type": "heading_1",
            "heading_1": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "A JavaScript library for building user interfaces",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "blue"
                        },
                        "plain_text": "A JavaScript library for building user interfaces",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "f049bae6-b331-40af-ba64-8816f9019bac",
            "created_time": "2021-05-23T18:00:00.000Z",
            "last_edited_time": "2021-05-23T18:00:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {"text": []}
        },
        {
            "object": "block",
            "id": "7652683a-e7d6-4caf-9e40-809313c4459c",
            "created_time": "2021-05-23T18:00:39.115Z",
            "last_edited_time": "2021-05-23T18:04:00.000Z",
            "has_children": false,
            "type": "heading_3",
            "heading_3": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Declarative", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": true,
                            "strikethrough": false,
                            "underline": true,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Declarative",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "d8642bb1-7561-477d-943b-f16ec951dc02",
            "created_time": "2021-05-23T18:00:00.000Z",
            "last_edited_time": "2021-05-23T18:01:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "React ", "link": null},
                        "annotations": {
                            "bold": true,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "React ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {
                            "content": "makes it painless to create interactive UIs. Design simple views for each state in your application, and ",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "makes it painless to create interactive UIs. Design simple views for each state in your application, and ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "React ", "link": null},
                        "annotations": {
                            "bold": true,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "React ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {
                            "content": "will efficiently update and render just the right components when your data changes.",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "will efficiently update and render just the right components when your data changes.",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "61ffef59-854b-41ee-b55b-c6d5bd85692b",
            "created_time": "2021-05-23T18:01:00.000Z",
            "last_edited_time": "2021-05-23T18:07:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Declarative ", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "red"
                        },
                        "plain_text": "Declarative ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "views make your code more ", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "views make your code more ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "predictable", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "green"
                        },
                        "plain_text": "predictable",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": " and ", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": " and ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "easier to debug", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "pink"
                        },
                        "plain_text": "easier to debug",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": ".", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": ".",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "c5d55884-6707-4dcd-8a0d-4a2d5b448d9b",
            "created_time": "2021-05-23T18:00:43.238Z",
            "last_edited_time": "2021-05-23T18:03:00.000Z",
            "has_children": false,
            "type": "heading_3",
            "heading_3": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Component-Based", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": true,
                            "strikethrough": false,
                            "underline": true,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Component-Based",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "682088f2-04cc-4615-b89d-e9bdc979b03b",
            "created_time": "2021-05-23T18:01:00.000Z",
            "last_edited_time": "2021-05-23T18:01:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "b4300e87-fc38-47c8-a7f4-8698c183ed8c",
            "created_time": "2021-05-23T18:01:00.000Z",
            "last_edited_time": "2021-05-23T18:02:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the ",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "DOM", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": true,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "purple"
                        },
                        "plain_text": "DOM",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": ".", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": ".",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "f3efe0a7-5f21-486c-9011-dd2783ba9d41",
            "created_time": "2021-05-23T18:00:56.930Z",
            "last_edited_time": "2021-05-23T18:03:00.000Z",
            "has_children": false,
            "type": "heading_3",
            "heading_3": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Learn Once, Write Anywhere", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": true,
                            "strikethrough": false,
                            "underline": true,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Learn Once, Write Anywhere",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "cfd73a62-f10c-4c7d-9923-b0af537ab235",
            "created_time": "2021-05-23T18:00:00.000Z",
            "last_edited_time": "2021-05-23T18:01:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "We don’t make assumptions about the rest of your technology stack, so you can develop new features in ",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "We don’t make assumptions about the rest of your technology stack, so you can develop new features in ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "React ", "link": null},
                        "annotations": {
                            "bold": true,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "React ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {
                            "content": "without rewriting existing code.",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "without rewriting existing code.",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "dfbd5367-e0fe-4c87-ad53-0cd589d224c8",
            "created_time": "2021-05-23T18:01:00.000Z",
            "last_edited_time": "2021-05-23T18:07:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "React ", "link": null},
                        "annotations": {
                            "bold": true,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "React ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "can also ", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "can also ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "render on the server ", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "gray"
                        },
                        "plain_text": "render on the server ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "using ", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "using ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "Node ", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "green"
                        },
                        "plain_text": "Node ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {"content": "and power mobile apps using ", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "and power mobile apps using ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {
                            "content": "React Native",
                            "link": {"url": "https://reactnative.dev/"}
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "React Native",
                        "href": "https://reactnative.dev/"
                    },
                    {
                        "type": "text",
                        "text": {"content": ".", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": ".",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "09d82a52-6154-48fb-af59-9855bbcfed00",
            "created_time": "2021-05-23T18:03:27.159Z",
            "last_edited_time": "2021-05-23T18:03:00.000Z",
            "has_children": false,
            "type": "heading_3",
            "heading_3": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "About React", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "brown"
                        },
                        "plain_text": "About React",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "50c478b5-d750-462e-a35a-094d41dfc70f",
            "created_time": "2021-05-23T18:02:50.348Z",
            "last_edited_time": "2021-05-23T18:02:00.000Z",
            "has_children": false,
            "type": "bulleted_list_item",
            "bulleted_list_item": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "Create native apps for Android and iOS using React",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Create native apps for Android and iOS using React",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "e64a31d0-ab75-417e-b6c5-340743616d8d",
            "created_time": "2021-05-23T18:02:00.000Z",
            "last_edited_time": "2021-05-23T18:02:00.000Z",
            "has_children": false,
            "type": "bulleted_list_item",
            "bulleted_list_item": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "Written in JavaScript—rendered with native code",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Written in JavaScript—rendered with native code",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "34bf23ba-5b11-4713-8d47-7a7e64d66573",
            "created_time": "2021-05-23T18:02:00.000Z",
            "last_edited_time": "2021-05-23T18:03:00.000Z",
            "has_children": false,
            "type": "bulleted_list_item",
            "bulleted_list_item": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "Native Development For Everyone",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Native Development For Everyone",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "fcf3e232-800a-4856-8241-dac3fcbe3465",
            "created_time": "2021-05-23T18:03:00.000Z",
            "last_edited_time": "2021-05-23T18:03:00.000Z",
            "has_children": false,
            "type": "bulleted_list_item",
            "bulleted_list_item": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Seamless Cross-Platform", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Seamless Cross-Platform",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "67a4bff6-42ac-4cd3-ae38-ed2dc2a07a12",
            "created_time": "2021-05-23T18:03:00.000Z",
            "last_edited_time": "2021-05-23T18:03:00.000Z",
            "has_children": false,
            "type": "bulleted_list_item",
            "bulleted_list_item": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Fast Refresh", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Fast Refresh",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "177ff824-a7f4-424a-a306-63021b3eaa2d",
            "created_time": "2021-05-23T18:03:00.000Z",
            "last_edited_time": "2021-05-23T18:03:00.000Z",
            "has_children": false,
            "type": "bulleted_list_item",
            "bulleted_list_item": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "Facebook Supported, Community Driven",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Facebook Supported, Community Driven",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "e0b01a3d-7b18-440e-8f6d-8c69d7c1e293",
            "created_time": "2021-05-28T21:21:37.075Z",
            "last_edited_time": "2021-05-28T21:21:00.000Z",
            "has_children": false,
            "type": "heading_3",
            "heading_3": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Learning React", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Learning React",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "cc1b4f6c-681d-40c2-a20c-fa4b15c29b74",
            "created_time": "2021-05-28T21:21:03.070Z",
            "last_edited_time": "2021-05-28T21:22:00.000Z",
            "has_children": false,
            "type": "to_do",
            "to_do": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Create React App", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Create React App",
                        "href": null
                    }
                ],
                "checked": false
            }
        },
        {
            "object": "block",
            "id": "bcf824fc-eb7d-46b9-ab40-032291c3247e",
            "created_time": "2021-05-28T21:21:00.000Z",
            "last_edited_time": "2021-05-29T00:01:00.000Z",
            "has_children": false,
            "type": "to_do",
            "to_do": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "JSX", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "JSX",
                        "href": null
                    }
                ],
                "checked": true
            }
        },
        {
            "object": "block",
            "id": "0ecf373e-80c6-4bf3-a3f1-73383f817ccf",
            "created_time": "2021-05-28T21:22:00.000Z",
            "last_edited_time": "2021-05-28T21:22:00.000Z",
            "has_children": false,
            "type": "to_do",
            "to_do": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Functional Components", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Functional Components",
                        "href": null
                    }
                ],
                "checked": false
            }
        },
        {
            "object": "block",
            "id": "4b33d264-c80a-4353-a844-a0cf9184eb39",
            "created_time": "2021-05-28T21:22:00.000Z",
            "last_edited_time": "2021-05-29T00:01:00.000Z",
            "has_children": false,
            "type": "to_do",
            "to_do": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Props vs State", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Props vs State",
                        "href": null
                    }
                ],
                "checked": true
            }
        },
        {
            "object": "block",
            "id": "2b77ba56-17ae-470b-b800-e69c3b85e938",
            "created_time": "2021-05-28T21:23:00.000Z",
            "last_edited_time": "2021-05-28T21:23:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {"text": []}
        },
        {
            "object": "block",
            "id": "dd52419b-d509-4a60-ad6d-8d0c4b06ca6e",
            "created_time": "2021-05-28T21:23:18.013Z",
            "last_edited_time": "2021-05-29T21:37:00.000Z",
            "has_children": true,
            "type": "toggle",
            "toggle": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "A Simple Component", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "A Simple Component",
                        "href": null
                    }
                ],
                "children": [
                    {
                        "object": "block",
                        "id": "710af982-db1c-4f6a-abd8-3097bc586446",
                        "created_time": "2021-05-29T21:37:13.945Z",
                        "last_edited_time": "2021-05-29T21:37:00.000Z",
                        "has_children": false,
                        "type": "heading_3",
                        "heading_3": {
                            "text": [
                                {
                                    "type": "text",
                                    "text": {"content": "Inner Title", "link": null},
                                    "annotations": {
                                        "bold": false,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false,
                                        "code": false,
                                        "color": "default"
                                    },
                                    "plain_text": "Inner Title",
                                    "href": null
                                }
                            ]
                        }
                    },
                    {
                        "object": "block",
                        "id": "baa84dfa-a8ff-459f-ba0d-eb766a451ad9",
                        "created_time": "2021-05-28T21:25:00.000Z",
                        "last_edited_time": "2021-05-29T21:37:00.000Z",
                        "has_children": false,
                        "type": "paragraph",
                        "paragraph": {
                            "text": [
                                {
                                    "type": "text",
                                    "text": {"content": "React ", "link": null},
                                    "annotations": {
                                        "bold": false,
                                        "italic": true,
                                        "strikethrough": false,
                                        "underline": true,
                                        "code": false,
                                        "color": "default"
                                    },
                                    "plain_text": "React ",
                                    "href": null
                                },
                                {
                                    "type": "text",
                                    "text": {
                                        "content": "components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.",
                                        "link": null
                                    },
                                    "annotations": {
                                        "bold": false,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false,
                                        "code": false,
                                        "color": "default"
                                    },
                                    "plain_text": "components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.",
                                    "href": null
                                }
                            ]
                        }
                    },
                    {
                        "object": "block",
                        "id": "70929631-368b-4831-9c6d-04ae3355c1a5",
                        "created_time": "2021-05-28T21:25:00.000Z",
                        "last_edited_time": "2021-05-29T21:36:00.000Z",
                        "has_children": false,
                        "type": "paragraph",
                        "paragraph": {
                            "text": [
                                {
                                    "type": "text",
                                    "text": {"content": "JSX ", "link": null},
                                    "annotations": {
                                        "bold": false,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false,
                                        "code": false,
                                        "color": "red"
                                    },
                                    "plain_text": "JSX ",
                                    "href": null
                                },
                                {
                                    "type": "text",
                                    "text": {"content": "is ", "link": null},
                                    "annotations": {
                                        "bold": false,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false,
                                        "code": false,
                                        "color": "default"
                                    },
                                    "plain_text": "is ",
                                    "href": null
                                },
                                {
                                    "type": "text",
                                    "text": {"content": "optional ", "link": null},
                                    "annotations": {
                                        "bold": false,
                                        "italic": false,
                                        "strikethrough": true,
                                        "underline": false,
                                        "code": false,
                                        "color": "default"
                                    },
                                    "plain_text": "optional ",
                                    "href": null
                                },
                                {
                                    "type": "text",
                                    "text": {
                                        "content": "and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX ",
                                        "link": null
                                    },
                                    "annotations": {
                                        "bold": false,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false,
                                        "code": false,
                                        "color": "default"
                                    },
                                    "plain_text": "and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX ",
                                    "href": null
                                },
                                {
                                    "type": "text",
                                    "text": {"content": "compilation ", "link": null},
                                    "annotations": {
                                        "bold": false,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false,
                                        "code": false,
                                        "color": "orange"
                                    },
                                    "plain_text": "compilation ",
                                    "href": null
                                },
                                {
                                    "type": "text",
                                    "text": {"content": "step.", "link": null},
                                    "annotations": {
                                        "bold": false,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false,
                                        "code": false,
                                        "color": "default"
                                    },
                                    "plain_text": "step.",
                                    "href": null
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "ddcc8dc0-126f-47dc-bf03-a8ebb8228e69",
            "created_time": "2021-05-28T21:26:12.759Z",
            "last_edited_time": "2021-05-28T21:26:00.000Z",
            "has_children": true,
            "type": "toggle",
            "toggle": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "A Stateful Component", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "A Stateful Component",
                        "href": null
                    }
                ],
                "children": [
                    {
                        "object": "block",
                        "id": "cc616514-1159-489b-9e85-19a204008642",
                        "created_time": "2021-05-28T21:26:00.000Z",
                        "last_edited_time": "2021-05-29T21:37:00.000Z",
                        "has_children": false,
                        "type": "paragraph",
                        "paragraph": {
                            "text": [
                                {
                                    "type": "text",
                                    "text": {"content": "I", "link": null},
                                    "annotations": {
                                        "bold": false,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false,
                                        "code": false,
                                        "color": "default"
                                    },
                                    "plain_text": "I",
                                    "href": null
                                },
                                {
                                    "type": "text",
                                    "text": {
                                        "content": "n addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().",
                                        "link": null
                                    },
                                    "annotations": {
                                        "bold": true,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false,
                                        "code": false,
                                        "color": "purple"
                                    },
                                    "plain_text": "n addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().",
                                    "href": null
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "d99a085c-c313-427e-8662-b744095ba2dc",
            "created_time": "2021-05-28T21:26:00.000Z",
            "last_edited_time": "2021-05-28T21:26:00.000Z",
            "has_children": true,
            "type": "toggle",
            "toggle": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "An Application", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "An Application",
                        "href": null
                    }
                ],
                "children": [
                    {
                        "object": "block",
                        "id": "4846d63f-ff99-44d2-8c5e-e59d9cfb6587",
                        "created_time": "2021-05-28T21:26:00.000Z",
                        "last_edited_time": "2021-05-28T21:26:00.000Z",
                        "has_children": false,
                        "type": "paragraph",
                        "paragraph": {
                            "text": [
                                {
                                    "type": "text",
                                    "text": {
                                        "content": "Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.",
                                        "link": null
                                    },
                                    "annotations": {
                                        "bold": false,
                                        "italic": false,
                                        "strikethrough": false,
                                        "underline": false,
                                        "code": false,
                                        "color": "default"
                                    },
                                    "plain_text": "Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.",
                                    "href": null
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "acc450e4-dcc3-425d-a88c-183789179ggb",
            "created_time": "2021-05-23T18:04:00.000Z",
            "last_edited_time": "2021-05-23T18:04:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {"text": []}
        },
        {
            "object": "block",
            "id": "6c0a547c-97f7-4783-9f35-6c28911825a3",
            "created_time": "2021-05-23T18:03:00.000Z",
            "last_edited_time": "2021-05-23T18:04:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {"content": "Reference: ", "link": null},
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "Reference: ",
                        "href": null
                    },
                    {
                        "type": "text",
                        "text": {
                            "content": "React.js Official Documentation",
                            "link": {"url": "https://reactjs.org/"}
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "React.js Official Documentation",
                        "href": "https://reactjs.org/"
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "4f8d1443-e343-4d15-bd0b-fd25c3a32322",
            "created_time": "2021-05-23T18:04:00.000Z",
            "last_edited_time": "2021-05-23T18:04:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "![my github pic](https://avatars.githubusercontent.com/u/38046239?v=4)#https://github.com/9gustin",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "![my github pic](https://avatars.githubusercontent.com/u/38046239?v=4)#https://github.com/9gustin",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "4f8d1kkkk443-e343-4d15-bd0b-fd25c3a32322",
            "created_time": "2021-05-23T18:04:00.000Z",
            "last_edited_time": "2021-05-23T18:04:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "-[Local](/loremVideo.mp4)",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "-[Local](/loremVideo.mp4)",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "4f8d1443-e343-jjj4d15-bd0b-fd25c3a32322",
            "created_time": "2021-05-23T18:04:00.000Z",
            "last_edited_time": "2021-05-23T18:04:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "-[Youtube](https://youtu.be/aA7si7AmPkY)#youtube",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "-[Youtube](https://youtu.be/aA7si7AmPkY)#youtube",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "4f8d1443-e34fff3-4d15-bd0b-fd25c3a32322",
            "created_time": "2021-05-23T18:04:00.000Z",
            "last_edited_time": "2021-05-23T18:04:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "-[GoogleDrive](https://drive.google.com/file/d/1BmIxtck_9FuMfZOKfJDQK_WvIl8cDV11/view?usp=sharing)#googleDrive",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "-[GoogleDrive](https://drive.google.com/file/d/1BmIxtck_9FuMfZOKfJDQK_WvIl8cDV11/view?usp=sharing)#googleDrive",
                        "href": null
                    }
                ]
            }
        },
        {
            "object": "block",
            "id": "4f8d144342343-e343-4d15-bd0b-fd25c3a323e1",
            "created_time": "2021-05-23T18:04:00.000Z",
            "last_edited_time": "2021-05-23T18:04:00.000Z",
            "has_children": false,
            "type": "paragraph",
            "paragraph": {
                "text": [
                    {
                        "type": "text",
                        "text": {
                            "content": "[my github profile](https://github.com/9gustin)",
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": "[my github profile](https://github.com/9gustin)",
                        "href": null
                    }
                ]
            }
        }
    ],
    "next_cursor": null,
    "has_more": false
}

function KunPage(): JSX.Element {
    const {name} = useQueryParams() as { name: string };
    console.log('aaaaaaa', name);
    // const { name } = useContext(MyParameterContext) as {name: string};

    const mutation = useMutation(requestv2CreateConcern)

    const queryKey = useMemo(() => getQueryKunDetail.fun({name}), [name])

    console.log('queryK', queryKey)
    const {data: kunData} = useQuery(queryKey, () => getQueryKunDetail.query({name}))

    const {data: notionData} = useQuery([ReactQueryKeys.notionPage, String(name)], () => mockFetchQuery({name}), {
        enabled: false
    })

    const {data: suData} = useQuery('s', () => defaultApi.getApiV1KunSubscribed61Status({input: name}))

    const {data} = useQuery([name], () => listContentInSymbol({channelId: kunInhabitant.world, name}))

    const {search} = useLocation();

    return (
        <div>
            <Helmet title="首页"/>
            <Header/>
            <Flex
                minH="100vh"
                align="center"
                justify="center"
                bg={useColorModeValue('gray.50', 'gray.800')}>

                <NotionRenderer recordMap={notionData as unknown as ExtendedRecordMap} fullPage darkMode={false}/>
                <Render blocks={block as unknown as NotionBlock[]} useStyles/>

                <Link href={goToUser(kunData?.record?.createUserId ?? '')}>user</Link>
                {
                    kunData?.record?.createUserName
                }
                {
                    kunData?.record?.createUserId ?? ''
                }

                <Button onClick={async () => {
                    await mutation.mutateAsync({
                            channelId: kunInhabitant.world_concern,
                            isLinked: true,
                            target: name
                        }, {
                            onSuccess: () => {
                                console.log('xxxxxx')
                            }
                        }
                    )
                }}>{suData?.record ? '关注' : '不关注'}</Button>

                <Button onClick={async () => {
                    await mutation.mutateAsync({
                            channelId: kunInhabitant.world_concern,
                        isLinked: false,
                        target: name
                        }, {
                            onSuccess: () => {
                                console.log('xxxxxx')
                            }
                        }
                    )
                }}>关注</Button>

                {
                    kunData?.record?.createUserId
                }

                <Container maxW="container.md" mt="24px">
                    {
                        (data?.records ?? []).map(r => (
                            <>
                                <h1>{r.title}</h1>
                                <h1>{r.userId}</h1>
                                <h1>{r.userNickName}</h1>
                                <h1>{r.richHtml}</h1>
                            </>
                        ))
                    }
                </Container>
            </Flex>
        </div>
    );
}

export default memo(KunPage);
