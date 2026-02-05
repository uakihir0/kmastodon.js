type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare namespace io.ktor.client.engine.js {
    /** @deprecated  */
    const initHook: any;
}
export declare namespace work.socialhub.kmastodon {
    interface Mastodon {
        service(): work.socialhub.kmastodon.domain.Service;
        apps(): work.socialhub.kmastodon.api.AppsResource;
        oauth(): work.socialhub.kmastodon.api.OAuthResource;
        nodes(): work.socialhub.kmastodon.api.NodesResource;
        emojis(): work.socialhub.kmastodon.api.EmojisResource;
        instances(): work.socialhub.kmastodon.api.InstancesResource;
        search(): work.socialhub.kmastodon.api.SearchResource;
        medias(): work.socialhub.kmastodon.api.MediasResource;
        trends(): work.socialhub.kmastodon.api.TrendsResource;
        lists(): work.socialhub.kmastodon.api.ListsResource;
        polls(): work.socialhub.kmastodon.api.PollsResource;
        mutes(): work.socialhub.kmastodon.api.MutesResource;
        blocks(): work.socialhub.kmastodon.api.BlocksResource;
        reports(): work.socialhub.kmastodon.api.ReportsResource;
        follows(): work.socialhub.kmastodon.api.FollowsResource;
        followRequests(): work.socialhub.kmastodon.api.FollowRequestsResource;
        accounts(): work.socialhub.kmastodon.api.AccountsResource;
        statuses(): work.socialhub.kmastodon.api.StatusesResource;
        timelines(): work.socialhub.kmastodon.api.TimelinesResource;
        favourites(): work.socialhub.kmastodon.api.FavouritesResource;
        notifications(): work.socialhub.kmastodon.api.NotificationsResource;
        uri(): string;
        accessToken(): string;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.Mastodon": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon {
    abstract class MastodonFactory extends KtSingleton<MastodonFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace MastodonFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(uri: string, accessToken?: string, service?: work.socialhub.kmastodon.domain.Service): work.socialhub.kmastodon.Mastodon;
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface AccountsResource {
        verifyCredentials(): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Account>>;
        updateCredentials(request: work.socialhub.kmastodon.api.request.accounts.AccountsUpdateCredentialsRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Account>>;
        account(request: work.socialhub.kmastodon.api.request.accounts.AccountsAccountRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Account>>;
        followers(request: work.socialhub.kmastodon.api.request.accounts.AccountsFollowersRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Account>>>;
        following(request: work.socialhub.kmastodon.api.request.accounts.AccountsFollowingRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Account>>>;
        statuses(request: work.socialhub.kmastodon.api.request.accounts.AccountsStatusesRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Status>>>;
        follow(request: work.socialhub.kmastodon.api.request.accounts.AccountsFollowRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Relationship>>;
        unfollow(request: work.socialhub.kmastodon.api.request.accounts.AccountsUnfollowRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Relationship>>;
        block(request: work.socialhub.kmastodon.api.request.accounts.AccountsBlockRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Relationship>>;
        unblock(request: work.socialhub.kmastodon.api.request.accounts.AccountsUnblockRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Relationship>>;
        mute(request: work.socialhub.kmastodon.api.request.accounts.AccountsMuteRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Relationship>>;
        unmute(request: work.socialhub.kmastodon.api.request.accounts.AccountsUnmuteRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Relationship>>;
        relationships(request: work.socialhub.kmastodon.api.request.accounts.AccountsRelationshipsRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Relationship>>>;
        search(request: work.socialhub.kmastodon.api.request.accounts.AccountsSearchRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Account>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.AccountsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface AppsResource {
        registerApplication(request: work.socialhub.kmastodon.api.request.apps.AppsRegisterApplicationRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.ClientCredential>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.AppsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface BlocksResource {
        blocks(request: work.socialhub.kmastodon.api.request.blocks.BlocksBlocksRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Account>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.BlocksResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface EmojisResource {
        customEmojis(): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Emoji>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.EmojisResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface FavouritesResource {
        favourites(request: work.socialhub.kmastodon.api.request.favourites.FavouritesFavouritesRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Status>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.FavouritesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface FollowRequestsResource {
        followRequests(): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Account>>>;
        authorizeFollowRequest(request: work.socialhub.kmastodon.api.request.followrequests.FollowRequestsAuthorizeFollowRequestRequest): Promise<work.socialhub.kmastodon.api.response.ResponseUnit>;
        rejectFollowRequest(request: work.socialhub.kmastodon.api.request.followrequests.FollowRequestsRejectFollowRequestRequest): Promise<work.socialhub.kmastodon.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.FollowRequestsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface FollowsResource {
        remoteFollow(request: work.socialhub.kmastodon.api.request.follows.FollowsRemoteFollowRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Account>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.FollowsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface InstancesResource {
        instanceV1(): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.instancev1.InstanceV1>>;
        instanceV2(): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.instancev2.InstanceV2>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.InstancesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface ListsResource {
        lists(request: work.socialhub.kmastodon.api.request.lists.ListsListsRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.AccountList>>>;
        listAccounts(request: work.socialhub.kmastodon.api.request.lists.ListsListAccountsRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Account>>>;
        list(request: work.socialhub.kmastodon.api.request.lists.ListsListRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.AccountList>>;
        createList(request: work.socialhub.kmastodon.api.request.lists.ListsCreateListRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.AccountList>>;
        updateList(request: work.socialhub.kmastodon.api.request.lists.ListsUpdateListRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.AccountList>>;
        deleteList(request: work.socialhub.kmastodon.api.request.lists.ListsDeleteListRequest): Promise<work.socialhub.kmastodon.api.response.ResponseUnit>;
        addAccountsToList(request: work.socialhub.kmastodon.api.request.lists.ListsAddAccountsToListRequest): Promise<work.socialhub.kmastodon.api.response.ResponseUnit>;
        deleteAccountsToList(request: work.socialhub.kmastodon.api.request.lists.ListsDeleteAccountsToListRequest): Promise<work.socialhub.kmastodon.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.ListsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface MediasResource {
        postMedia(request: work.socialhub.kmastodon.api.request.medias.MediasPostMediaRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Attachment>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.MediasResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface MutesResource {
        mutes(): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Account>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.MutesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface NodesResource {
        nodeInfo(): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.node.Node>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.NodesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface NotificationsResource {
        notifications(request: work.socialhub.kmastodon.api.request.notifications.NotificationsNotificationsRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Notification>>>;
        notification(request: work.socialhub.kmastodon.api.request.notifications.NotificationsNotificationRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Notification>>;
        clearNotifications(): Promise<work.socialhub.kmastodon.api.response.ResponseUnit>;
        subscription(): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Subscription>>;
        pushSubscription(request: work.socialhub.kmastodon.api.request.notifications.NotificationsPostSubscriptionRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Notification>>;
        editSubscription(request: work.socialhub.kmastodon.api.request.notifications.NotificationsEditSubscriptionRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Notification>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.NotificationsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface OAuthResource {
        issueAccessTokenWithCredentials(request: work.socialhub.kmastodon.api.request.oauth.OAuthIssueAccessTokenWithCredentialsRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.AccessToken>>;
        issueAccessTokenWithAuthorizationCode(request: work.socialhub.kmastodon.api.request.oauth.OAuthIssueAccessTokenWithAuthorizationCodeRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.AccessToken>>;
        refreshAccessToken(request: work.socialhub.kmastodon.api.request.oauth.OAuthRefreshAccessTokenRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.AccessToken>>;
        authorizationUrl(request: work.socialhub.kmastodon.api.request.oauth.OAuthAuthorizationUrlRequest): Promise<work.socialhub.kmastodon.api.response.Response<string>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.OAuthResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface PollsResource {
        votePoll(request: work.socialhub.kmastodon.api.request.polls.PollsVotePollRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Poll>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.PollsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface ReportsResource {
        reports(): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Report>>>;
        postReport(request: work.socialhub.kmastodon.api.request.reports.ReportsPostReportRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Report>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.ReportsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface SearchResource {
        search(request: work.socialhub.kmastodon.api.request.search.SearchSearchRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Results>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.SearchResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface StatusesResource {
        status(request: work.socialhub.kmastodon.api.request.statuses.StatusesStatusRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Status>>;
        context(request: work.socialhub.kmastodon.api.request.statuses.StatusesContextRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Context>>;
        card(request: work.socialhub.kmastodon.api.request.statuses.StatusesCardRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Card>>;
        rebloggedBy(request: work.socialhub.kmastodon.api.request.statuses.StatusesRebloggedByRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Account>>>;
        favouritedBy(request: work.socialhub.kmastodon.api.request.statuses.StatusesFavouritedByRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Account>>>;
        postStatus(request: work.socialhub.kmastodon.api.request.statuses.StatusesPostStatusRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Status>>;
        deleteStatus(request: work.socialhub.kmastodon.api.request.statuses.StatusesDeleteStatusRequest): Promise<work.socialhub.kmastodon.api.response.ResponseUnit>;
        reblog(request: work.socialhub.kmastodon.api.request.statuses.StatusesReblogRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Status>>;
        unreblog(request: work.socialhub.kmastodon.api.request.statuses.StatusesUnreblogRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Status>>;
        favourite(request: work.socialhub.kmastodon.api.request.statuses.StatusesFavouriteRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Status>>;
        unfavourite(request: work.socialhub.kmastodon.api.request.statuses.StatusesUnfavouriteRequest): Promise<work.socialhub.kmastodon.api.response.Response<work.socialhub.kmastodon.entity.Status>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.StatusesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface TimelinesResource {
        homeTimeline(request: work.socialhub.kmastodon.api.request.timelines.TimelinesHomeTimelineRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Status>>>;
        publicTimeline(request: work.socialhub.kmastodon.api.request.timelines.TimelinesPublicTimelineRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Status>>>;
        hashtagTimeline(request: work.socialhub.kmastodon.api.request.timelines.TimelinesHashTagTimelineRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Status>>>;
        listTimeline(request: work.socialhub.kmastodon.api.request.timelines.TimelinesListTimelineRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Status>>>;
        conversations(request: work.socialhub.kmastodon.api.request.timelines.TimelinesConversationsRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Conversation>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.TimelinesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api {
    interface TrendsResource {
        trends(request: work.socialhub.kmastodon.api.request.trends.TrendsTrendsRequest): Promise<work.socialhub.kmastodon.api.response.Response<Array<work.socialhub.kmastodon.entity.Trend>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmastodon.api.TrendsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmastodon.api.request {
    class Page {
        constructor();
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace Page {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Page;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request {
    class Range {
        constructor();
        get maxId(): Nullable<string>;
        set maxId(value: Nullable<string>);
        get minId(): Nullable<string>;
        set minId(value: Nullable<string>);
        get sinceId(): Nullable<string>;
        set sinceId(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace Range {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Range;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsAccountRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace AccountsAccountRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsAccountRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsBlockRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace AccountsBlockRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsBlockRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsFollowRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace AccountsFollowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsFollowRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsFollowersRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace AccountsFollowersRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsFollowersRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsFollowingRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace AccountsFollowingRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsFollowingRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsMuteRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace AccountsMuteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsMuteRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsRelationshipsRequest {
        constructor();
        get ids(): Array<string>;
        set ids(value: Array<string>);
        addId(id: string): void;
    }
    namespace AccountsRelationshipsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsRelationshipsRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsSearchRequest {
        constructor();
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace AccountsSearchRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsSearchRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsStatusesRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get onlyPinned(): Nullable<boolean>;
        set onlyPinned(value: Nullable<boolean>);
        get onlyMedia(): Nullable<boolean>;
        set onlyMedia(value: Nullable<boolean>);
        get excludeReplies(): Nullable<boolean>;
        set excludeReplies(value: Nullable<boolean>);
        get excludeReblogs(): Nullable<boolean>;
        set excludeReblogs(value: Nullable<boolean>);
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace AccountsStatusesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsStatusesRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsUnblockRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace AccountsUnblockRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsUnblockRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsUnfollowRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace AccountsUnfollowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsUnfollowRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsUnmuteRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace AccountsUnmuteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsUnmuteRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.accounts {
    class AccountsUpdateCredentialsRequest {
        constructor();
        get displayName(): Nullable<string>;
        set displayName(value: Nullable<string>);
        get note(): Nullable<string>;
        set note(value: Nullable<string>);
        get avatar(): Nullable<string>;
        set avatar(value: Nullable<string>);
        get header(): Nullable<string>;
        set header(value: Nullable<string>);
    }
    namespace AccountsUpdateCredentialsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountsUpdateCredentialsRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.apps {
    class AppsRegisterApplicationRequest {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get website(): Nullable<string>;
        set website(value: Nullable<string>);
        get redirectUris(): Nullable<string>;
        set redirectUris(value: Nullable<string>);
        get scopes(): Nullable<string>;
        set scopes(value: Nullable<string>);
    }
    namespace AppsRegisterApplicationRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AppsRegisterApplicationRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.blocks {
    class BlocksBlocksRequest {
        constructor();
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace BlocksBlocksRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlocksBlocksRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.favourites {
    class FavouritesFavouritesRequest {
        constructor();
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace FavouritesFavouritesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FavouritesFavouritesRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.followrequests {
    class FollowRequestsAuthorizeFollowRequestRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace FollowRequestsAuthorizeFollowRequestRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowRequestsAuthorizeFollowRequestRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.followrequests {
    class FollowRequestsRejectFollowRequestRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace FollowRequestsRejectFollowRequestRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowRequestsRejectFollowRequestRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.follows {
    class FollowsRemoteFollowRequest {
        constructor();
        get uri(): Nullable<string>;
        set uri(value: Nullable<string>);
    }
    namespace FollowsRemoteFollowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowsRemoteFollowRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.lists {
    class ListsAddAccountsToListRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get accountIds(): Array<string>;
        set accountIds(value: Array<string>);
        addAccountId(accountId: string): void;
    }
    namespace ListsAddAccountsToListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListsAddAccountsToListRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.lists {
    class ListsCreateListRequest {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
    }
    namespace ListsCreateListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListsCreateListRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.lists {
    class ListsDeleteAccountsToListRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get accountIds(): Array<string>;
        set accountIds(value: Array<string>);
        addAccountId(accountId: string): void;
    }
    namespace ListsDeleteAccountsToListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListsDeleteAccountsToListRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.lists {
    class ListsDeleteListRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace ListsDeleteListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListsDeleteListRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.lists {
    class ListsListAccountsRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace ListsListAccountsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListsListAccountsRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.lists {
    class ListsListRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace ListsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListsListRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.lists {
    class ListsListsRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace ListsListsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListsListsRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.lists {
    class ListsUpdateListRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
    }
    namespace ListsUpdateListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListsUpdateListRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.medias {
    class MediasPostMediaRequest {
        constructor();
        get bytes(): Nullable<Int8Array>;
        set bytes(value: Nullable<Int8Array>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
    }
    namespace MediasPostMediaRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MediasPostMediaRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.notifications {
    class NotificationsEditSubscriptionRequest {
        constructor();
        get alert(): Nullable<work.socialhub.kmastodon.entity.Alert>;
        set alert(value: Nullable<work.socialhub.kmastodon.entity.Alert>);
    }
    namespace NotificationsEditSubscriptionRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotificationsEditSubscriptionRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.notifications {
    class NotificationsNotificationRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace NotificationsNotificationRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotificationsNotificationRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.notifications {
    class NotificationsNotificationsRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
        get types(): Nullable<Array<string>>;
        set types(value: Nullable<Array<string>>);
        get excludeTypes(): Nullable<Array<string>>;
        set excludeTypes(value: Nullable<Array<string>>);
    }
    namespace NotificationsNotificationsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotificationsNotificationsRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.notifications {
    class NotificationsPostSubscriptionRequest {
        constructor();
        get endpoint(): Nullable<string>;
        set endpoint(value: Nullable<string>);
        get p256dh(): Nullable<string>;
        set p256dh(value: Nullable<string>);
        get auth(): Nullable<string>;
        set auth(value: Nullable<string>);
        get alert(): Nullable<work.socialhub.kmastodon.entity.Alert>;
        set alert(value: Nullable<work.socialhub.kmastodon.entity.Alert>);
    }
    namespace NotificationsPostSubscriptionRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotificationsPostSubscriptionRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.oauth {
    class OAuthAuthorizationUrlRequest {
        constructor();
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get redirectUri(): Nullable<string>;
        set redirectUri(value: Nullable<string>);
        get scopes(): Nullable<string>;
        set scopes(value: Nullable<string>);
    }
    namespace OAuthAuthorizationUrlRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthAuthorizationUrlRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.oauth {
    class OAuthIssueAccessTokenWithAuthorizationCodeRequest {
        constructor();
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
        get redirectUri(): Nullable<string>;
        set redirectUri(value: Nullable<string>);
        get code(): Nullable<string>;
        set code(value: Nullable<string>);
    }
    namespace OAuthIssueAccessTokenWithAuthorizationCodeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthIssueAccessTokenWithAuthorizationCodeRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.oauth {
    class OAuthIssueAccessTokenWithCredentialsRequest {
        constructor();
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
        get emailAddress(): Nullable<string>;
        set emailAddress(value: Nullable<string>);
        get password(): Nullable<string>;
        set password(value: Nullable<string>);
        get scopes(): Nullable<string>;
        set scopes(value: Nullable<string>);
    }
    namespace OAuthIssueAccessTokenWithCredentialsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthIssueAccessTokenWithCredentialsRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.oauth {
    class OAuthRefreshAccessTokenRequest {
        constructor();
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
        get refreshToken(): Nullable<string>;
        set refreshToken(value: Nullable<string>);
    }
    namespace OAuthRefreshAccessTokenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthRefreshAccessTokenRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.polls {
    class PollsVotePollRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get choices(): Nullable<Array<number>>;
        set choices(value: Nullable<Array<number>>);
    }
    namespace PollsVotePollRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PollsVotePollRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.reports {
    class ReportsPostReportRequest {
        constructor();
        get accountId(): Nullable<string>;
        set accountId(value: Nullable<string>);
        get statusIds(): Nullable<Array<string>>;
        set statusIds(value: Nullable<Array<string>>);
        get comment(): Nullable<string>;
        set comment(value: Nullable<string>);
    }
    namespace ReportsPostReportRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReportsPostReportRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.search {
    class SearchSearchRequest {
        constructor();
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get resolve(): Nullable<boolean>;
        set resolve(value: Nullable<boolean>);
        get onlyFollowing(): Nullable<boolean>;
        set onlyFollowing(value: Nullable<boolean>);
        get page(): Nullable<work.socialhub.kmastodon.api.request.Page>;
        set page(value: Nullable<work.socialhub.kmastodon.api.request.Page>);
    }
    namespace SearchSearchRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchSearchRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesCardRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace StatusesCardRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesCardRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesContextRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace StatusesContextRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesContextRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesDeleteStatusRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace StatusesDeleteStatusRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesDeleteStatusRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesFavouriteRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace StatusesFavouriteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesFavouriteRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesFavouritedByRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace StatusesFavouritedByRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesFavouritedByRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesPostStatusRequest {
        constructor();
        get inReplyToId(): Nullable<string>;
        set inReplyToId(value: Nullable<string>);
        get sensitive(): Nullable<boolean>;
        set sensitive(value: Nullable<boolean>);
        get spoilerText(): Nullable<string>;
        set spoilerText(value: Nullable<string>);
        get visibility(): Nullable<string>;
        set visibility(value: Nullable<string>);
        get status(): Nullable<string>;
        set status(value: Nullable<string>);
        get content(): Nullable<string>;
        set content(value: Nullable<string>);
        get mediaIds(): Nullable<Array<string>>;
        set mediaIds(value: Nullable<Array<string>>);
        get pollOptions(): Nullable<Array<string>>;
        set pollOptions(value: Nullable<Array<string>>);
        get pollExpiresIn(): Nullable<number>;
        set pollExpiresIn(value: Nullable<number>);
        get pollMultiple(): Nullable<boolean>;
        set pollMultiple(value: Nullable<boolean>);
        get pollHideTotals(): Nullable<boolean>;
        set pollHideTotals(value: Nullable<boolean>);
    }
    namespace StatusesPostStatusRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesPostStatusRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesReblogRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace StatusesReblogRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesReblogRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesRebloggedByRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace StatusesRebloggedByRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesRebloggedByRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesStatusRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace StatusesStatusRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesStatusRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesUnfavouriteRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace StatusesUnfavouriteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesUnfavouriteRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.statuses {
    class StatusesUnreblogRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace StatusesUnreblogRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusesUnreblogRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.timelines {
    class TimelinesConversationsRequest {
        constructor();
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace TimelinesConversationsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TimelinesConversationsRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.timelines {
    class TimelinesHashTagTimelineRequest {
        constructor();
        get hashtag(): Nullable<string>;
        set hashtag(value: Nullable<string>);
        get local(): Nullable<boolean>;
        set local(value: Nullable<boolean>);
        get onlyMedia(): Nullable<boolean>;
        set onlyMedia(value: Nullable<boolean>);
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace TimelinesHashTagTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TimelinesHashTagTimelineRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.timelines {
    class TimelinesHomeTimelineRequest {
        constructor();
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace TimelinesHomeTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TimelinesHomeTimelineRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.timelines {
    class TimelinesListTimelineRequest {
        constructor();
        get listId(): Nullable<string>;
        set listId(value: Nullable<string>);
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace TimelinesListTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TimelinesListTimelineRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.timelines {
    class TimelinesPublicTimelineRequest {
        constructor();
        get local(): Nullable<boolean>;
        set local(value: Nullable<boolean>);
        get onlyMedia(): Nullable<boolean>;
        set onlyMedia(value: Nullable<boolean>);
        get range(): Nullable<work.socialhub.kmastodon.api.request.Range>;
        set range(value: Nullable<work.socialhub.kmastodon.api.request.Range>);
    }
    namespace TimelinesPublicTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TimelinesPublicTimelineRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.request.trends {
    class TrendsTrendsRequest {
        constructor();
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace TrendsTrendsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TrendsTrendsRequest;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.response {
    class Response<T> {
        constructor(data: T);
        get data(): T;
        set data(value: T);
        get limit(): Nullable<work.socialhub.kmastodon.entity.share.RateLimit>;
        set limit(value: Nullable<work.socialhub.kmastodon.entity.share.RateLimit>);
        get link(): Nullable<work.socialhub.kmastodon.entity.share.Link>;
        set link(value: Nullable<work.socialhub.kmastodon.entity.share.Link>);
        get json(): Nullable<string>;
        set json(value: Nullable<string>);
    }
    namespace Response {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <T>() => Response<T>;
        }
    }
}
export declare namespace work.socialhub.kmastodon.api.response {
    class ResponseUnit {
        constructor();
        get limit(): Nullable<work.socialhub.kmastodon.entity.share.RateLimit>;
        set limit(value: Nullable<work.socialhub.kmastodon.entity.share.RateLimit>);
        get link(): Nullable<work.socialhub.kmastodon.entity.share.Link>;
        set link(value: Nullable<work.socialhub.kmastodon.entity.share.Link>);
    }
    namespace ResponseUnit {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ResponseUnit;
        }
    }
}
export declare namespace work.socialhub.kmastodon.domain {
    abstract class Service {
        private constructor();
        static get MASTODON(): work.socialhub.kmastodon.domain.Service & {
            get name(): "MASTODON";
            get ordinal(): 0;
        };
        static get PIXELFED(): work.socialhub.kmastodon.domain.Service & {
            get name(): "PIXELFED";
            get ordinal(): 1;
        };
        static get PLEROMA(): work.socialhub.kmastodon.domain.Service & {
            get name(): "PLEROMA";
            get ordinal(): 2;
        };
        get name(): "MASTODON" | "PIXELFED" | "PLEROMA";
        get ordinal(): 0 | 1 | 2;
        static values(): Array<work.socialhub.kmastodon.domain.Service>;
        static valueOf(value: string): work.socialhub.kmastodon.domain.Service;
    }
    namespace Service {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Service;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    from(value: string): work.socialhub.kmastodon.domain.Service;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class AccessToken {
        constructor();
        get accessToken(): Nullable<string>;
        set accessToken(value: Nullable<string>);
        get tokenType(): Nullable<string>;
        set tokenType(value: Nullable<string>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
        get createdAt(): number;
        set createdAt(value: number);
        get refreshToken(): Nullable<string>;
        set refreshToken(value: Nullable<string>);
        get expiresIn(): Nullable<number>;
        set expiresIn(value: Nullable<number>);
    }
    namespace AccessToken {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccessToken;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Account {
        constructor();
        get id(): string;
        set id(value: string);
        get userName(): string;
        set userName(value: string);
        get account(): string;
        set account(value: string);
        get url(): string;
        set url(value: string);
        get displayName(): string;
        set displayName(value: string);
        get note(): string;
        set note(value: string);
        get avatar(): string;
        set avatar(value: string);
        get avatarStatic(): Nullable<string>;
        set avatarStatic(value: Nullable<string>);
        get header(): string;
        set header(value: string);
        get headerStatic(): Nullable<string>;
        set headerStatic(value: Nullable<string>);
        get isLocked(): boolean;
        set isLocked(value: boolean);
        get fields(): Array<work.socialhub.kmastodon.entity.Field>;
        set fields(value: Array<work.socialhub.kmastodon.entity.Field>);
        get emojis(): Array<work.socialhub.kmastodon.entity.Emoji>;
        set emojis(value: Array<work.socialhub.kmastodon.entity.Emoji>);
        get isBot(): boolean;
        set isBot(value: boolean);
        get isGroup(): boolean;
        set isGroup(value: boolean);
        get isDiscoverable(): Nullable<boolean>;
        set isDiscoverable(value: Nullable<boolean>);
        get isNoindex(): Nullable<boolean>;
        set isNoindex(value: Nullable<boolean>);
        get moved(): Nullable<work.socialhub.kmastodon.entity.Account>;
        set moved(value: Nullable<work.socialhub.kmastodon.entity.Account>);
        get isSuspended(): boolean;
        set isSuspended(value: boolean);
        get isLimited(): boolean;
        set isLimited(value: boolean);
        get createdAt(): string;
        set createdAt(value: string);
        get lastStatusAt(): Nullable<string>;
        set lastStatusAt(value: Nullable<string>);
        get statusesCount(): number;
        set statusesCount(value: number);
        get followersCount(): number;
        set followersCount(value: number);
        get followingCount(): number;
        set followingCount(value: number);
        get source(): Nullable<work.socialhub.kmastodon.entity.AccountSource>;
        set source(value: Nullable<work.socialhub.kmastodon.entity.AccountSource>);
        get role(): Nullable<work.socialhub.kmastodon.entity.Role>;
        set role(value: Nullable<work.socialhub.kmastodon.entity.Role>);
        get pleroma(): Nullable<work.socialhub.kmastodon.entity.services.pleroma.PleromaAccount>;
        set pleroma(value: Nullable<work.socialhub.kmastodon.entity.services.pleroma.PleromaAccount>);
    }
    namespace Account {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Account;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class AccountList {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
    }
    namespace AccountList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountList;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class AccountSource {
        constructor();
        get privacy(): Nullable<string>;
        set privacy(value: Nullable<string>);
        get sensitive(): Nullable<boolean>;
        set sensitive(value: Nullable<boolean>);
        get language(): Nullable<string>;
        set language(value: Nullable<string>);
        get note(): Nullable<string>;
        set note(value: Nullable<string>);
        get fields(): Nullable<Array<work.socialhub.kmastodon.entity.Field>>;
        set fields(value: Nullable<Array<work.socialhub.kmastodon.entity.Field>>);
    }
    namespace AccountSource {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AccountSource;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Alert {
        constructor();
        get follow(): Nullable<boolean>;
        set follow(value: Nullable<boolean>);
        get favourite(): Nullable<boolean>;
        set favourite(value: Nullable<boolean>);
        get reblog(): Nullable<boolean>;
        set reblog(value: Nullable<boolean>);
        get mention(): Nullable<boolean>;
        set mention(value: Nullable<boolean>);
        get poll(): Nullable<boolean>;
        set poll(value: Nullable<boolean>);
        get status(): Nullable<boolean>;
        set status(value: Nullable<boolean>);
    }
    namespace Alert {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Alert;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Application {
        constructor();
        get name(): string;
        set name(value: string);
        get website(): Nullable<string>;
        set website(value: Nullable<string>);
    }
    namespace Application {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Application;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Attachment {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get remoteUrl(): Nullable<string>;
        set remoteUrl(value: Nullable<string>);
        get previewUrl(): Nullable<string>;
        set previewUrl(value: Nullable<string>);
        get textUrl(): Nullable<string>;
        set textUrl(value: Nullable<string>);
        get optimizedUrl(): Nullable<string>;
        set optimizedUrl(value: Nullable<string>);
        get meta(): Nullable<work.socialhub.kmastodon.entity.meta.Meta>;
        set meta(value: Nullable<work.socialhub.kmastodon.entity.meta.Meta>);
        get orientation(): Nullable<string>;
        set orientation(value: Nullable<string>);
    }
    namespace Attachment {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Attachment;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Card {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get image(): Nullable<string>;
        set image(value: Nullable<string>);
    }
    namespace Card {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Card;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class ClientCredential {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get redirectUri(): Nullable<string>;
        set redirectUri(value: Nullable<string>);
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
    }
    namespace ClientCredential {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ClientCredential;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Context {
        constructor();
        get ancestors(): Nullable<Array<work.socialhub.kmastodon.entity.Status>>;
        set ancestors(value: Nullable<Array<work.socialhub.kmastodon.entity.Status>>);
        get descendants(): Nullable<Array<work.socialhub.kmastodon.entity.Status>>;
        set descendants(value: Nullable<Array<work.socialhub.kmastodon.entity.Status>>);
    }
    namespace Context {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Context;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Conversation {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get accounts(): Nullable<Array<work.socialhub.kmastodon.entity.Account>>;
        set accounts(value: Nullable<Array<work.socialhub.kmastodon.entity.Account>>);
        get lastStatus(): Nullable<work.socialhub.kmastodon.entity.Status>;
        set lastStatus(value: Nullable<work.socialhub.kmastodon.entity.Status>);
        get unread(): Nullable<boolean>;
        set unread(value: Nullable<boolean>);
    }
    namespace Conversation {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Conversation;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Emoji {
        constructor();
        get shortcode(): Nullable<string>;
        set shortcode(value: Nullable<string>);
        get staticUrl(): Nullable<string>;
        set staticUrl(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get visibleInPicker(): Nullable<boolean>;
        set visibleInPicker(value: Nullable<boolean>);
        get category(): Nullable<string>;
        set category(value: Nullable<string>);
    }
    namespace Emoji {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Emoji;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Error {
        constructor();
        get error(): Nullable<string>;
        set error(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
    }
    namespace Error {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Error;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Field {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
    }
    namespace Field {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Field;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class History {
        constructor();
        get day(): Nullable<string>;
        set day(value: Nullable<string>);
        get uses(): Nullable<number>;
        set uses(value: Nullable<number>);
        get accounts(): Nullable<number>;
        set accounts(value: Nullable<number>);
    }
    namespace History {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => History;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Mention {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get userName(): Nullable<string>;
        set userName(value: Nullable<string>);
        get account(): Nullable<string>;
        set account(value: Nullable<string>);
    }
    namespace Mention {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Mention;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Notification {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get account(): Nullable<work.socialhub.kmastodon.entity.Account>;
        set account(value: Nullable<work.socialhub.kmastodon.entity.Account>);
        get status(): Nullable<work.socialhub.kmastodon.entity.Status>;
        set status(value: Nullable<work.socialhub.kmastodon.entity.Status>);
    }
    namespace Notification {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Notification;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Poll {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get expiresAt(): Nullable<string>;
        set expiresAt(value: Nullable<string>);
        get isExpired(): boolean;
        set isExpired(value: boolean);
        get isMultiple(): boolean;
        set isMultiple(value: boolean);
        get isVoted(): boolean;
        set isVoted(value: boolean);
        get ownVotes(): Nullable<Array<number>>;
        set ownVotes(value: Nullable<Array<number>>);
        get votesCount(): Nullable<number>;
        set votesCount(value: Nullable<number>);
        get votersCount(): Nullable<number>;
        set votersCount(value: Nullable<number>);
        get options(): Nullable<Array<work.socialhub.kmastodon.entity.PollOption>>;
        set options(value: Nullable<Array<work.socialhub.kmastodon.entity.PollOption>>);
        get emojis(): Nullable<Array<work.socialhub.kmastodon.entity.Emoji>>;
        set emojis(value: Nullable<Array<work.socialhub.kmastodon.entity.Emoji>>);
    }
    namespace Poll {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Poll;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class PollOption {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get votesCount(): Nullable<number>;
        set votesCount(value: Nullable<number>);
    }
    namespace PollOption {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PollOption;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Relationship {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get isFollowing(): boolean;
        set isFollowing(value: boolean);
        get isFollowedBy(): boolean;
        set isFollowedBy(value: boolean);
        get isBlocking(): boolean;
        set isBlocking(value: boolean);
        get isMuting(): boolean;
        set isMuting(value: boolean);
        get isRequested(): boolean;
        set isRequested(value: boolean);
    }
    namespace Relationship {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Relationship;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Report {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get actionTaken(): Nullable<string>;
        set actionTaken(value: Nullable<string>);
    }
    namespace Report {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Report;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Results {
        constructor();
        get accounts(): Nullable<Array<work.socialhub.kmastodon.entity.Account>>;
        set accounts(value: Nullable<Array<work.socialhub.kmastodon.entity.Account>>);
        get statuses(): Nullable<Array<work.socialhub.kmastodon.entity.Status>>;
        set statuses(value: Nullable<Array<work.socialhub.kmastodon.entity.Status>>);
        get hashtags(): Nullable<Array<work.socialhub.kmastodon.entity.Tag>>;
        set hashtags(value: Nullable<Array<work.socialhub.kmastodon.entity.Tag>>);
    }
    namespace Results {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Results;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Role {
        constructor();
        get id(): number;
        set id(value: number);
        get name(): string;
        set name(value: string);
        get color(): string;
        set color(value: string);
        get permissions(): number;
        set permissions(value: number);
        get isHighlighted(): boolean;
        set isHighlighted(value: boolean);
    }
    namespace Role {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Role;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Status {
        constructor();
        get id(): string;
        set id(value: string);
        get uri(): string;
        set uri(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get account(): work.socialhub.kmastodon.entity.Account;
        set account(value: work.socialhub.kmastodon.entity.Account);
        get content(): string;
        set content(value: string);
        get visibility(): string;
        set visibility(value: string);
        get isSensitive(): boolean;
        set isSensitive(value: boolean);
        get spoilerText(): string;
        set spoilerText(value: string);
        get mediaAttachments(): Array<work.socialhub.kmastodon.entity.Attachment>;
        set mediaAttachments(value: Array<work.socialhub.kmastodon.entity.Attachment>);
        get application(): Nullable<work.socialhub.kmastodon.entity.Application>;
        set application(value: Nullable<work.socialhub.kmastodon.entity.Application>);
        get mentions(): Array<work.socialhub.kmastodon.entity.Mention>;
        set mentions(value: Array<work.socialhub.kmastodon.entity.Mention>);
        get tags(): Array<work.socialhub.kmastodon.entity.Tag>;
        set tags(value: Array<work.socialhub.kmastodon.entity.Tag>);
        get emojis(): Array<work.socialhub.kmastodon.entity.Emoji>;
        set emojis(value: Array<work.socialhub.kmastodon.entity.Emoji>);
        get reblogsCount(): number;
        set reblogsCount(value: number);
        get favouritesCount(): number;
        set favouritesCount(value: number);
        get repliesCount(): number;
        set repliesCount(value: number);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get inReplyToId(): Nullable<string>;
        set inReplyToId(value: Nullable<string>);
        get inReplyToAccountId(): Nullable<string>;
        set inReplyToAccountId(value: Nullable<string>);
        get reblog(): Nullable<work.socialhub.kmastodon.entity.Status>;
        set reblog(value: Nullable<work.socialhub.kmastodon.entity.Status>);
        get poll(): Nullable<work.socialhub.kmastodon.entity.Poll>;
        set poll(value: Nullable<work.socialhub.kmastodon.entity.Poll>);
        get card(): Nullable<work.socialhub.kmastodon.entity.Card>;
        set card(value: Nullable<work.socialhub.kmastodon.entity.Card>);
        get language(): Nullable<string>;
        set language(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get editedAt(): Nullable<string>;
        set editedAt(value: Nullable<string>);
        get isReblogged(): boolean;
        set isReblogged(value: boolean);
        get isFavourited(): boolean;
        set isFavourited(value: boolean);
        get isMuted(): boolean;
        set isMuted(value: boolean);
        get isBookmarked(): boolean;
        set isBookmarked(value: boolean);
        get isPinned(): boolean;
        set isPinned(value: boolean);
        get filtered(): Array<work.socialhub.kmastodon.entity.filter.Filter>;
        set filtered(value: Array<work.socialhub.kmastodon.entity.filter.Filter>);
        get pleroma(): Nullable<work.socialhub.kmastodon.entity.services.pleroma.PleromaStatus>;
        set pleroma(value: Nullable<work.socialhub.kmastodon.entity.services.pleroma.PleromaStatus>);
    }
    namespace Status {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Status;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Subscription {
        constructor();
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get endpoint(): Nullable<string>;
        set endpoint(value: Nullable<string>);
        get alerts(): Nullable<work.socialhub.kmastodon.entity.Alert>;
        set alerts(value: Nullable<work.socialhub.kmastodon.entity.Alert>);
        get serverKey(): Nullable<string>;
        set serverKey(value: Nullable<string>);
    }
    namespace Subscription {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Subscription;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Tag {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get history(): Nullable<Array<work.socialhub.kmastodon.entity.History>>;
        set history(value: Nullable<Array<work.socialhub.kmastodon.entity.History>>);
    }
    namespace Tag {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Tag;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class Trend {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get history(): Nullable<Array<work.socialhub.kmastodon.entity.History>>;
        set history(value: Nullable<Array<work.socialhub.kmastodon.entity.History>>);
    }
    namespace Trend {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Trend;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity {
    class WebPush {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get notificationType(): Nullable<string>;
        set notificationType(value: Nullable<string>);
        get notificationId(): Nullable<number>;
        set notificationId(value: Nullable<number>);
        get preferredLocale(): Nullable<string>;
        set preferredLocale(value: Nullable<string>);
        get access_token(): Nullable<string>;
        set access_token(value: Nullable<string>);
        get icon(): Nullable<string>;
        set icon(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
    }
    namespace WebPush {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WebPush;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.filter {
    class Filter {
        constructor();
        get id(): string;
        set id(value: string);
        get title(): string;
        set title(value: string);
        get context(): string;
        set context(value: string);
        get expiresAt(): Nullable<string>;
        set expiresAt(value: Nullable<string>);
        get filterAction(): Nullable<string>;
        set filterAction(value: Nullable<string>);
        get keywords(): Array<work.socialhub.kmastodon.entity.filter.FilterKeyword>;
        set keywords(value: Array<work.socialhub.kmastodon.entity.filter.FilterKeyword>);
        get statuses(): Array<work.socialhub.kmastodon.entity.filter.FilterStatus>;
        set statuses(value: Array<work.socialhub.kmastodon.entity.filter.FilterStatus>);
    }
    namespace Filter {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Filter;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.filter {
    class FilterKeyword {
        constructor();
        get id(): string;
        set id(value: string);
        get keyword(): string;
        set keyword(value: string);
        get isWholeWord(): boolean;
        set isWholeWord(value: boolean);
    }
    namespace FilterKeyword {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilterKeyword;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.filter {
    class FilterStatus {
        constructor();
        get id(): string;
        set id(value: string);
        get statusId(): string;
        set statusId(value: string);
    }
    namespace FilterStatus {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilterStatus;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev1 {
    class InstanceV1 {
        constructor();
        get uri(): string;
        set uri(value: string);
        get title(): string;
        set title(value: string);
        get shortDescription(): Nullable<string>;
        set shortDescription(value: Nullable<string>);
        get description(): string;
        set description(value: string);
        get email(): string;
        set email(value: string);
        get version(): string;
        set version(value: string);
        get urls(): work.socialhub.kmastodon.entity.instancev1.InstanceV1Urls;
        set urls(value: work.socialhub.kmastodon.entity.instancev1.InstanceV1Urls);
        get stats(): work.socialhub.kmastodon.entity.instancev1.InstanceV1Stats;
        set stats(value: work.socialhub.kmastodon.entity.instancev1.InstanceV1Stats);
        get thumbnail(): Nullable<string>;
        set thumbnail(value: Nullable<string>);
        get languages(): Nullable<Array<string>>;
        set languages(value: Nullable<Array<string>>);
        get registrations(): Nullable<boolean>;
        set registrations(value: Nullable<boolean>);
        get approvalRequired(): Nullable<boolean>;
        set approvalRequired(value: Nullable<boolean>);
        get invitesEnabled(): Nullable<boolean>;
        set invitesEnabled(value: Nullable<boolean>);
        get configuration(): Nullable<work.socialhub.kmastodon.entity.instancev1.InstanceV1Configuration>;
        set configuration(value: Nullable<work.socialhub.kmastodon.entity.instancev1.InstanceV1Configuration>);
        get contactAccount(): Nullable<work.socialhub.kmastodon.entity.Account>;
        set contactAccount(value: Nullable<work.socialhub.kmastodon.entity.Account>);
        get rules(): Nullable<Array<work.socialhub.kmastodon.entity.instancev1.InstanceV1Rules>>;
        set rules(value: Nullable<Array<work.socialhub.kmastodon.entity.instancev1.InstanceV1Rules>>);
    }
    namespace InstanceV1 {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV1;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev1 {
    class InstanceV1Configuration {
        constructor();
        get statuses(): work.socialhub.kmastodon.entity.instancev1.InstanceV1Statuses;
        set statuses(value: work.socialhub.kmastodon.entity.instancev1.InstanceV1Statuses);
        get mediaAttachments(): work.socialhub.kmastodon.entity.instancev1.InstanceV1MediaAttachments;
        set mediaAttachments(value: work.socialhub.kmastodon.entity.instancev1.InstanceV1MediaAttachments);
        get polls(): work.socialhub.kmastodon.entity.instancev1.InstanceV1Polls;
        set polls(value: work.socialhub.kmastodon.entity.instancev1.InstanceV1Polls);
    }
    namespace InstanceV1Configuration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV1Configuration;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev1 {
    class InstanceV1Fields {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get verifiedAt(): Nullable<string>;
        set verifiedAt(value: Nullable<string>);
    }
    namespace InstanceV1Fields {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV1Fields;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev1 {
    class InstanceV1MediaAttachments {
        constructor();
        get supportedMimeTypes(): Array<string>;
        set supportedMimeTypes(value: Array<string>);
        get imageSizeLimit(): number;
        set imageSizeLimit(value: number);
        get imageMatrixLimit(): number;
        set imageMatrixLimit(value: number);
        get videoSizeLimit(): number;
        set videoSizeLimit(value: number);
        get videoFrameRateLimit(): number;
        set videoFrameRateLimit(value: number);
        get videoMatrixLimit(): number;
        set videoMatrixLimit(value: number);
    }
    namespace InstanceV1MediaAttachments {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV1MediaAttachments;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev1 {
    class InstanceV1Polls {
        constructor();
        get maxOptions(): Nullable<number>;
        set maxOptions(value: Nullable<number>);
        get maxCharactersPerOption(): Nullable<number>;
        set maxCharactersPerOption(value: Nullable<number>);
        get minExpiration(): Nullable<number>;
        set minExpiration(value: Nullable<number>);
        get maxExpiration(): Nullable<number>;
        set maxExpiration(value: Nullable<number>);
    }
    namespace InstanceV1Polls {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV1Polls;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev1 {
    class InstanceV1Rules {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
    }
    namespace InstanceV1Rules {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV1Rules;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev1 {
    class InstanceV1Stats {
        constructor();
        get userCount(): number;
        set userCount(value: number);
        get statusCount(): number;
        set statusCount(value: number);
        get domainCount(): number;
        set domainCount(value: number);
    }
    namespace InstanceV1Stats {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV1Stats;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev1 {
    class InstanceV1Statuses {
        constructor();
        get maxCharacters(): number;
        set maxCharacters(value: number);
        get maxMediaAttachments(): number;
        set maxMediaAttachments(value: number);
        get charactersReservedPerUrl(): number;
        set charactersReservedPerUrl(value: number);
    }
    namespace InstanceV1Statuses {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV1Statuses;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev1 {
    class InstanceV1Urls {
        constructor();
        get streamingApi(): string;
        set streamingApi(value: string);
    }
    namespace InstanceV1Urls {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV1Urls;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2 {
        constructor();
        get domain(): string;
        set domain(value: string);
        get title(): string;
        set title(value: string);
        get version(): string;
        set version(value: string);
        get sourceUrl(): string;
        set sourceUrl(value: string);
        get description(): string;
        set description(value: string);
        get usage(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Usage;
        set usage(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Usage);
        get thumbnail(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Thumbnail;
        set thumbnail(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Thumbnail);
        get languages(): Array<string>;
        set languages(value: Array<string>);
        get configuration(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Configuration;
        set configuration(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Configuration);
        get registrations(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Registrations;
        set registrations(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Registrations);
        get contact(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Contact;
        set contact(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Contact);
        get rules(): Array<work.socialhub.kmastodon.entity.instancev2.InstanceV2Rules>;
        set rules(value: Array<work.socialhub.kmastodon.entity.instancev2.InstanceV2Rules>);
    }
    namespace InstanceV2 {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Accounts {
        constructor();
        get maxFeaturedTags(): number;
        set maxFeaturedTags(value: number);
        get maxPinnedStatuses(): Nullable<number>;
        set maxPinnedStatuses(value: Nullable<number>);
    }
    namespace InstanceV2Accounts {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Accounts;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Configuration {
        constructor();
        get urls(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Urls;
        set urls(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Urls);
        get vapid(): Nullable<work.socialhub.kmastodon.entity.instancev2.InstanceV2Vapid>;
        set vapid(value: Nullable<work.socialhub.kmastodon.entity.instancev2.InstanceV2Vapid>);
        get accounts(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Accounts;
        set accounts(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Accounts);
        get statuses(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Statuses;
        set statuses(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Statuses);
        get mediaAttachments(): work.socialhub.kmastodon.entity.instancev2.InstanceV2MediaAttachments;
        set mediaAttachments(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2MediaAttachments);
        get polls(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Polls;
        set polls(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Polls);
        get translation(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Translation;
        set translation(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Translation);
    }
    namespace InstanceV2Configuration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Configuration;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Contact {
        constructor();
        get email(): string;
        set email(value: string);
        get account(): Nullable<work.socialhub.kmastodon.entity.Account>;
        set account(value: Nullable<work.socialhub.kmastodon.entity.Account>);
    }
    namespace InstanceV2Contact {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Contact;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Fields {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get verifiedAt(): Nullable<string>;
        set verifiedAt(value: Nullable<string>);
    }
    namespace InstanceV2Fields {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Fields;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2MediaAttachments {
        constructor();
        get supportedMimeTypes(): Array<string>;
        set supportedMimeTypes(value: Array<string>);
        get imageSizeLimit(): number;
        set imageSizeLimit(value: number);
        get imageMatrixLimit(): number;
        set imageMatrixLimit(value: number);
        get videoSizeLimit(): number;
        set videoSizeLimit(value: number);
        get videoFrameRateLimit(): number;
        set videoFrameRateLimit(value: number);
        get videoMatrixLimit(): number;
        set videoMatrixLimit(value: number);
    }
    namespace InstanceV2MediaAttachments {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2MediaAttachments;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Polls {
        constructor();
        get maxOptions(): number;
        set maxOptions(value: number);
        get maxCharactersPerOption(): number;
        set maxCharactersPerOption(value: number);
        get minExpiration(): number;
        set minExpiration(value: number);
        get maxExpiration(): number;
        set maxExpiration(value: number);
    }
    namespace InstanceV2Polls {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Polls;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Registrations {
        constructor();
        get enabled(): boolean;
        set enabled(value: boolean);
        get approvalRequired(): boolean;
        set approvalRequired(value: boolean);
        get message(): Nullable<string>;
        set message(value: Nullable<string>);
    }
    namespace InstanceV2Registrations {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Registrations;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Rules {
        constructor();
        get id(): string;
        set id(value: string);
        get text(): string;
        set text(value: string);
    }
    namespace InstanceV2Rules {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Rules;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Statuses {
        constructor();
        get maxCharacters(): number;
        set maxCharacters(value: number);
        get maxMediaAttachments(): number;
        set maxMediaAttachments(value: number);
        get charactersReservedPerUrl(): number;
        set charactersReservedPerUrl(value: number);
    }
    namespace InstanceV2Statuses {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Statuses;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Thumbnail {
        constructor();
        get url(): string;
        set url(value: string);
        get blurhash(): Nullable<string>;
        set blurhash(value: Nullable<string>);
        get versions(): Nullable<work.socialhub.kmastodon.entity.instancev2.InstanceV2Versions>;
        set versions(value: Nullable<work.socialhub.kmastodon.entity.instancev2.InstanceV2Versions>);
    }
    namespace InstanceV2Thumbnail {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Thumbnail;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Translation {
        constructor();
        get enabled(): boolean;
        set enabled(value: boolean);
    }
    namespace InstanceV2Translation {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Translation;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Urls {
        constructor();
        get streaming(): string;
        set streaming(value: string);
    }
    namespace InstanceV2Urls {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Urls;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Usage {
        constructor();
        get users(): work.socialhub.kmastodon.entity.instancev2.InstanceV2Users;
        set users(value: work.socialhub.kmastodon.entity.instancev2.InstanceV2Users);
    }
    namespace InstanceV2Usage {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Usage;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Users {
        constructor(activeMonth?: number);
        get activeMonth(): number;
        set activeMonth(value: number);
    }
    namespace InstanceV2Users {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Users;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Vapid {
        constructor();
        get publicKey(): string;
        set publicKey(value: string);
    }
    namespace InstanceV2Vapid {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Vapid;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.instancev2 {
    class InstanceV2Versions {
        constructor();
        get at1x(): Nullable<string>;
        set at1x(value: Nullable<string>);
        get at2x(): Nullable<string>;
        set at2x(value: Nullable<string>);
    }
    namespace InstanceV2Versions {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InstanceV2Versions;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.meta {
    class Meta {
        constructor();
        get focus(): Nullable<work.socialhub.kmastodon.entity.meta.MetaFocus>;
        set focus(value: Nullable<work.socialhub.kmastodon.entity.meta.MetaFocus>);
        get original(): Nullable<work.socialhub.kmastodon.entity.meta.MetaOriginal>;
        set original(value: Nullable<work.socialhub.kmastodon.entity.meta.MetaOriginal>);
    }
    namespace Meta {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Meta;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.meta {
    class MetaFocus {
        constructor();
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
    }
    namespace MetaFocus {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MetaFocus;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.meta {
    class MetaOriginal {
        constructor();
        get width(): number;
        set width(value: number);
        get height(): number;
        set height(value: number);
        get size(): Nullable<string>;
        set size(value: Nullable<string>);
        get aspect(): number;
        set aspect(value: number);
    }
    namespace MetaOriginal {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MetaOriginal;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.node {
    class Node {
        constructor();
        get version(): Nullable<string>;
        set version(value: Nullable<string>);
        get software(): Nullable<work.socialhub.kmastodon.entity.node.NodeSoftware>;
        set software(value: Nullable<work.socialhub.kmastodon.entity.node.NodeSoftware>);
        get protocols(): Nullable<Array<string>>;
        set protocols(value: Nullable<Array<string>>);
        get openRegistrations(): Nullable<boolean>;
        set openRegistrations(value: Nullable<boolean>);
    }
    namespace Node {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Node;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.node {
    class NodeSoftware {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get version(): Nullable<string>;
        set version(value: Nullable<string>);
    }
    namespace NodeSoftware {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NodeSoftware;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.nodeinfo {
    class NodeInfo {
        constructor();
        get links(): Nullable<Array<work.socialhub.kmastodon.entity.nodeinfo.NodeInfoLinks>>;
        set links(value: Nullable<Array<work.socialhub.kmastodon.entity.nodeinfo.NodeInfoLinks>>);
    }
    namespace NodeInfo {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NodeInfo;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.nodeinfo {
    class NodeInfoLinks {
        constructor();
        get href(): Nullable<string>;
        set href(value: Nullable<string>);
        get rel(): Nullable<string>;
        set rel(value: Nullable<string>);
    }
    namespace NodeInfoLinks {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NodeInfoLinks;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.services.pleroma {
    class PleromaAccount {
        constructor();
        get isAcceptsChatMessages(): boolean;
        set isAcceptsChatMessages(value: boolean);
        get isAllowFollowingMove(): boolean;
        set isAllowFollowingMove(value: boolean);
        get apId(): Nullable<string>;
        set apId(value: Nullable<string>);
        get chatToken(): Nullable<string>;
        set chatToken(value: Nullable<string>);
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
        get isHideFavorites(): boolean;
        set isHideFavorites(value: boolean);
        get isHideFollowers(): boolean;
        set isHideFollowers(value: boolean);
        get isHideFollowersCount(): boolean;
        set isHideFollowersCount(value: boolean);
        get isHideFollows(): boolean;
        set isHideFollows(value: boolean);
        get isHideFollowsCount(): boolean;
        set isHideFollowsCount(value: boolean);
        get isAdmin(): boolean;
        set isAdmin(value: boolean);
        get isConfirmed(): boolean;
        set isConfirmed(value: boolean);
        get isModerator(): boolean;
        set isModerator(value: boolean);
        get isSkipThreadContainment(): boolean;
        set isSkipThreadContainment(value: boolean);
        get unreadConversationCount(): number;
        set unreadConversationCount(value: number);
        get unreadNotificationsCount(): number;
        set unreadNotificationsCount(value: number);
    }
    namespace PleromaAccount {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PleromaAccount;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.services.pleroma {
    class PleromaContent {
        constructor();
        get textPlain(): Nullable<string>;
        set textPlain(value: Nullable<string>);
    }
    namespace PleromaContent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PleromaContent;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.services.pleroma {
    class PleromaReaction {
        constructor();
        get count(): number;
        set count(value: number);
        get isMe(): boolean;
        set isMe(value: boolean);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
    }
    namespace PleromaReaction {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PleromaReaction;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.services.pleroma {
    class PleromaStatus {
        constructor();
        get content(): Nullable<work.socialhub.kmastodon.entity.services.pleroma.PleromaContent>;
        set content(value: Nullable<work.socialhub.kmastodon.entity.services.pleroma.PleromaContent>);
        get conversationId(): number;
        set conversationId(value: number);
        get directConversationId(): Nullable<string>;
        set directConversationId(value: Nullable<string>);
        get emojiReactions(): Nullable<Array<work.socialhub.kmastodon.entity.services.pleroma.PleromaReaction>>;
        set emojiReactions(value: Nullable<Array<work.socialhub.kmastodon.entity.services.pleroma.PleromaReaction>>);
        get expiresAt(): Nullable<string>;
        set expiresAt(value: Nullable<string>);
        get inReplyToAccountAcct(): Nullable<string>;
        set inReplyToAccountAcct(value: Nullable<string>);
        get isLocal(): boolean;
        set isLocal(value: boolean);
        get isParentVisible(): boolean;
        set isParentVisible(value: boolean);
        get pinnedAt(): Nullable<string>;
        set pinnedAt(value: Nullable<string>);
        get spoilerText(): Nullable<work.socialhub.kmastodon.entity.services.pleroma.PleromaContent>;
        set spoilerText(value: Nullable<work.socialhub.kmastodon.entity.services.pleroma.PleromaContent>);
        get isThreadMuted(): boolean;
        set isThreadMuted(value: boolean);
    }
    namespace PleromaStatus {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PleromaStatus;
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.share {
    class Link {
        constructor();
        get nextUrl(): Nullable<string>;
        set nextUrl(value: Nullable<string>);
        get prevUrl(): Nullable<string>;
        set prevUrl(value: Nullable<string>);
        get nextMaxId(): Nullable<string>;
        set nextMaxId(value: Nullable<string>);
        get prevMinId(): Nullable<string>;
        set prevMinId(value: Nullable<string>);
    }
    namespace Link {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Link;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    of(response: any/* work.socialhub.khttpclient.HttpResponse */): Nullable<work.socialhub.kmastodon.entity.share.Link>;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kmastodon.entity.share {
    class RateLimit {
        constructor();
        get limit(): number;
        set limit(value: number);
        get remaining(): number;
        set remaining(value: number);
        get reset(): Nullable<any>/* Nullable<kotlinx.datetime.Instant> */;
        set reset(value: Nullable<any>/* Nullable<kotlinx.datetime.Instant> */);
    }
    namespace RateLimit {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RateLimit;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    of(response: any/* work.socialhub.khttpclient.HttpResponse */): Nullable<work.socialhub.kmastodon.entity.share.RateLimit>;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kmastodon {
    abstract class KmastodonFactory extends KtSingleton<KmastodonFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace KmastodonFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(uri: string, userAccessToken?: string, service?: work.socialhub.kmastodon.domain.Service): work.socialhub.kmastodon.Mastodon;
                private constructor();
            }
        }
    }
}
export as namespace work_socialhub_kmastodon_all;