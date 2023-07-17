import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FriendComponent } from './friend/friend.component';
import { ProfileComponent } from './profile/profile.component';
import { StatusComponent } from './status/status.component';
export const routes: Routes = [
  { path: 'hello-world',component: HelloWorldComponent},
  { path: 'friend',component: FriendComponent},
  { path: 'profile',component: ProfileComponent},
  { path: 'status',component: StatusComponent},
];
