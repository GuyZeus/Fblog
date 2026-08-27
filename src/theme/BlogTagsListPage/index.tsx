import React, {type ReactNode} from 'react';
import {Redirect} from 'react-router-dom';
import BlogTagsListPage from '@theme-original/BlogTagsListPage';
import type BlogTagsListPageType from '@theme/BlogTagsListPage';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof BlogTagsListPageType>;

/**
 * 藏掉「标签」聚合云页面：访问 /blog/tags 时直接跳回博客列表。
 * 博文内的单标签文章页（/blog/tags/<某标签>）不受影响，标签功能照常可用。
 */
export default function BlogTagsListPageWrapper(props: Props): ReactNode {
  return <Redirect to="/blog" />;
}
