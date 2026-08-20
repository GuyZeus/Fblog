import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';

/**
 * Giscus 评论区组件（基于 GitHub Discussions）。
 * 仅渲染于单篇博文页（由 BlogPostItem 包装层控制）。
 *
 * 配置对应 giscus.app 向导输出（仓库 GuyZeus/Fblog，分类 Q&A）。
 * theme 跟随 Docusaurus 明暗模式（useColorMode），比 preferred_color_scheme
 * 更贴合站点主题切换。
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
        repoId="R_kgDOTgL5sg"
        category="Q&A"
        categoryId="DIC_kwDOTgL5ss4DDxsh"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode === 'dark' ? 'transparent_dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
