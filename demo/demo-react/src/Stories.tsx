import { useState } from 'react';
import { StoriesApp, StoriesNavigator, StoriesViewer, StoriesReactRenderer, StoryComponent, StoriesLayout } from '@stories/stories-react';
import { modulesToStories, StoryModules } from '@stories/stories-common';

import './App.css';

import modules from './stories-list';
const stories = modulesToStories(modules as unknown as StoryModules);
console.log('main', stories)

function Stories() {
  const [story, setStory] = useState<StoryComponent | undefined>();
  
  const storySelected = (event: CustomEvent) => { 
    console.log('storySelected', event.detail);
    setStory(event.detail);
  }

  return (
    <StoriesApp stories={stories} onStory={storySelected}>
      <StoriesLayout>
        <StoriesNavigator slot="navigator"/>
        <StoriesViewer slot="viewer">
          <StoriesReactRenderer story={story}/>
        </StoriesViewer>
      </StoriesLayout>
    </StoriesApp>
  );
}

export default Stories;
