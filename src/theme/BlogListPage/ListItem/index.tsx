import React from "react"
import type { Props as BlogPostItemProps } from "@theme/BlogPostItem"
import { Chip } from "../Chip"
import styles from "./styles.module.css"
import type { FrontMatter } from "../"

type Props = {
  content: Omit<BlogPostItemProps, "children">
  forcedTag?: {
    label: string
    permalink: string
    color: string
    backgroundColor: string
  }
}

const ExternalChip = ({ permalink }) => {
  const externalUrl = new URL(permalink)
  return (
    <Chip
      className={styles.externalPost}
      label={`Posted on ${externalUrl.hostname}`}
      permalink={`${externalUrl.protocol}//${externalUrl.hostname}`}
      color="#ddd"
      backgroundColor="#ddd"
      size="small"
      skin="secondary"
    />
  )
}

export const ListItem = ({ forcedTag, content }: Props) => {
  const tag = forcedTag ?? content.metadata.tags[0] ?? {}
  const frontMatter: FrontMatter = content.frontMatter
  const isExternal = Boolean(frontMatter.permalink)
  const postUrl = isExternal
    ? frontMatter.permalink
    : content.metadata.permalink
  const imageUrl = content.frontMatter.image ?? "/img/tutorial/placeholder.png"
  const author =
    typeof content.frontMatter.author_url !== "undefined" ? (
      <a href={content.frontMatter.author_url}>{content.frontMatter.author}</a>
    ) : (
      content.frontMatter.author
    )

  return (
    <div className={styles.root}>
      <div className={styles.imageBox}>
        <a
          href={postUrl}
          className={styles.image}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {isExternal && <ExternalChip permalink={postUrl} />}
      </div>

      <div className={styles.content}>
        <div className={styles.tags}>
          <Chip
            label={tag.label}
            permalink={tag.permalink}
            skin="secondary"
            size="small"
            color={tag.color}
            backgroundColor={tag.backgroundColor}
          />
        </div>

        <h3 className={styles.title}>
          <a href={postUrl}>{content.metadata.title}</a>
        </h3>
        <div className={styles.author}>
          <div className={styles.author_box}>
            <img
              src={frontMatter.author_image_url}
              width="25px"
              height="25px"
              style={{ borderRadius: "25px", marginRight: "8px" }}
            />{" "}
            {author}
          </div>
          {content.metadata.formattedDate}
        </div>
      </div>
    </div>
  )
}
