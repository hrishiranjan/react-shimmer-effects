import React, { Component } from "react";
import {
  Button,
  CircularImage,
  Thumbnail,
  Card,
  SimpleGallery,
  FeaturedGallery,
  TableCol,
  TableRow,
  Table,
  Badge,
  Text,
  Title,
  SocialPost,
  Separator,
  CategoryItem,
  CategoryList,
  PostItem,
  PostDetails,
  PostList,
  ContentBlock,
} from "shimmer-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Elements</h1>
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
        <Badge width={200} />
        <Title />
        <Title line={3} variant="secondary" />
        <Text />
        <CircularImage size={300} />
        <Thumbnail height={300} width={500} cssClasses="m-0" rounded />
        <Separator />
        <h1>Gallery</h1>
        <p>Circular Image Gallery with Caption</p>
        <SimpleGallery imageType="circular" imageHeight={200} caption />
        <p>Thumbnail Image Gallery</p>
        <SimpleGallery card imageHeight={300} />
        <p>Thumbnail Image Gallery with Caption</p>
        <SimpleGallery card imageHeight={300} caption />
        <p>Featured Gallery</p>
        <FeaturedGallery row={3} col={2} card frameHeight={600} />
        <Separator />
        <h1>Table</h1>
        <Table row={10} />
        <Separator />
        <h1>Social Post</h1>
        <div className="shimmer-row">
          <div className="shimmer-col">
            <SocialPost type="image" />
            <SocialPost type="both" />
          </div>
          <div className="shimmer-col">
            <SocialPost type="text" />
          </div>
        </div>
        <Separator />
        <h1>Category Item & List</h1>
        <div className="shimmer-row">
          <div className="shimmer-col">
            <Card cssClasses="p-30">
              <CategoryItem />

              <CategoryItem
                hasImage
                imageType="thumbnail"
                imageWidth={100}
                imageHeight={100}
                title
              />

              <CategoryItem
                hasImage
                imageType="circular"
                imageWidth={100}
                imageHeight={100}
                title
              />

              <CategoryItem
                hasImage
                imageType="thumbnail"
                imageWidth={100}
                imageHeight={100}
                text
              />

              <CategoryItem
                hasImage
                imageType="circular"
                imageWidth={100}
                imageHeight={100}
                text
              />

              <CategoryItem
                hasImage
                imageType="thumbnail"
                imageWidth={100}
                imageHeight={100}
                text
                cta
              />

              <CategoryItem
                hasImage
                imageType="circular"
                imageWidth={100}
                imageHeight={100}
                text
                cta
              />
            </Card>
          </div>
          <div className="shimmer-col">
            <CategoryList title items={6} categoryStyle="STYLE_SEVEN" />
          </div>
        </div>
        <Separator />
        <h1>Post Item</h1>
        <div className="shimmer-row">
          <div className="shimmer-col">
            <PostItem card title text cta />
          </div>
          <div className="shimmer-col">
            <PostItem card title cta />
          </div>
          <div className="shimmer-col">
            <PostItem
              card
              title
              cta
              imageType="thumbnail"
              imageWidth={80}
              imageHeight={80}
              contentCenter
            />
          </div>
        </div>
        <Separator />
        <h1>Post List</h1>
        <PostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
        <Separator />
        <h1>Post Details</h1>
        <PostDetails card cta variant="SIMPLE" />
        <PostDetails card cta variant="EDITOR" />
        <Separator />
        <h1>Content Block</h1>
        <ContentBlock
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={370}
        />
        <ContentBlock
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={370}
        />
      </div>
    );
  }
}
