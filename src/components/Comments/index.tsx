import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';

/**
 * Giscus 评论区组件（基于 GitHub Discussions）。
 * 仅渲染于单篇博文页（由 BlogPostItem 包装层控制）。
 *
 * ⚠️ 下面的 repoId / categoryId 为占位符，需替换为 giscus.app 为
 *    GuyZeus/Fblog 生成的真实值（见 README / 部署说明）。
 *    在拿到正确 ID 前，构建不受影响，评论区仅显示为空白。
 */
export default function Comments(): JSX.Element | null {
  const isBrowser = useIsBrowser();
  const { colorMode } = useColorMode();

  if (!isBrowser) {
    return null;
  }

  return (
    <div className="gz-comments">
      <Giscus
        repo="GuyZeus/Fblog"
        repoId="__REPO_ID__"
        category="Announcements"
        categoryId="__CATEGORY_ID__"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'transparent_dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
