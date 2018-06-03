import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GravatarDirective} from './directives/gravatar.directive';
import {DialogModule} from './modules/dialog.module';
import {UnitMenuComponent} from './components/unit-menu/unit-menu.component';
import {UserImageDirective} from './directives/user-image.directive';
import {MaterialImportModule} from './modules/material-import.module';
import {BadgeComponent} from './components/badge/badge.component';
import {MatFabMenuComponent} from './components/mat-fab-menu/mat-fab-menu.component';
import {PasswordInputComponent} from './components/password-input/password-input.component';
import {ExpandableDivComponent} from './components/expandable-div/expandable-div.component';
import {ButtonSaveCancelComponent} from './components/button-save-cancel/button-save-cancel.component';
import {UploadFormComponent} from './components/upload-form/upload-form.component';
import {FileUploadModule} from 'ng2-file-upload';
import {FilesizePipe} from './pipes/filesize/filesize.pipe';
import {UploadFormDialog} from './components/upload-form-dialog/upload-form-dialog.component';
import {ChangePasswordDialogComponent} from './components/change-password-dialog/change-password-dialog.component';
import {MarkdownEditorComponent} from './components/markdown-editor/markdown-editor.component';
import {AceEditorModule} from 'ng2-ace-editor';
import {PickMediaDialog} from './components/pick-media-dialog/pick-media-dialog.component';
import {TranslateModule} from '@ngx-translate/core';
import {AdminMarkdownEditComponent} from './components/admin-markdown-edit/admin-markdown-edit.component';
import {UserProfileDialog} from 'app/shared/components/user-profile-dialog/user-profile-dialog.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {ChatNameInputComponent} from './components/chat-name-input/chat-name-input.component';
import {InfiniteScrollDirective} from './directives/infinite-scroll.directive';
import { ShowCommentsDirective } from './directives/show-comments.directive';
import { CommentsDialogComponent } from './components/comments-dialog/comments-dialog.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { MessagingInputFieldComponent } from './components/messaging-input-field/messaging-input-field.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportModule,
    HttpClientModule,
    FileUploadModule,
    AceEditorModule,
    FileUploadModule,
    TranslateModule,
  ],
  declarations: [
    GravatarDirective,
    UnitMenuComponent,
    UserImageDirective,
    BadgeComponent,
    PasswordInputComponent,
    MatFabMenuComponent,
    BadgeComponent,
    ExpandableDivComponent,
    ButtonSaveCancelComponent,
    UploadFormComponent,
    FilesizePipe,
    UploadFormDialog,
    ChangePasswordDialogComponent,
    MarkdownEditorComponent,
    PickMediaDialog,
    AdminMarkdownEditComponent,
    UserProfileDialog,
    NotfoundComponent,
    UserProfileDialog,
    MessagingComponent,
    ChatNameInputComponent,
    InfiniteScrollDirective,
    ShowCommentsDirective,
    CommentsDialogComponent,
    MessagingComponent,
    MessagingInputFieldComponent,
    MessageComponent,
  ],
  exports: [
    GravatarDirective,
    DialogModule,
    UnitMenuComponent,
    UserImageDirective,
    MaterialImportModule,
    BadgeComponent,
    PasswordInputComponent,
    MatFabMenuComponent,
    BadgeComponent,
    ExpandableDivComponent,
    ButtonSaveCancelComponent,
    MarkdownEditorComponent,
    UploadFormComponent,
    FilesizePipe,
    UploadFormDialog,
    ChangePasswordDialogComponent,
    PickMediaDialog,
    TranslateModule,
    AdminMarkdownEditComponent,
    UserProfileDialog,
    MessagingComponent,
    ChatNameInputComponent,
    InfiniteScrollDirective,
    ShowCommentsDirective,
  ],
  entryComponents: [
    UploadFormDialog,
    PickMediaDialog,
    UserProfileDialog,
    ChatNameInputComponent,
    CommentsDialogComponent,
    MessagingComponent
  ],
  providers: [],
})
export class SharedModule {
}
