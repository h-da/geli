import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IFreeTextUnit} from '../../../../../../../shared/models/units/IFreeTextUnit';
import {MatDialog, MatSnackBar} from '@angular/material';
import {FreeTextUnitService, NotificationService, UnitService} from '../../../shared/services/data.service';
import {FreeTextUnit} from '../../../models/units/FreeTextUnit';
import {ICourse} from '../../../../../../../shared/models/ICourse';
import {UnitGeneralInfoFormComponent} from '../unit-general-info-form/unit-general-info-form.component';
import {FreeTextUnitEditorComponent} from './free-text-unit-editor/free-text-unit-editor.component';
import {FreeTextUnitEditorDialog} from './free-text-unit-editor/free-text-unit-editor-dialog/free-text-unit-editor.dialog';
import {isUndefined} from 'util';
import {FormControl, FormGroup} from '@angular/forms';
import {UnitFormService} from '../../../shared/services/unit-form.service';

@Component({
  selector: 'app-free-text-unit-form',
  templateUrl: './free-text-unit-form.component.html',
  styleUrls: ['./free-text-unit-form.component.scss']
})
export class FreeTextUnitFormComponent implements OnInit {
  @Input() course: ICourse;
  @Input() lectureId: string;
  @Input() model: IFreeTextUnit;
  @Input() onDone: () => void;


  unitForm: FormGroup;

  @ViewChild(FreeTextUnitEditorComponent)
  private freeTextEditor: FreeTextUnitEditorComponent;

  constructor(private freeTextUnitService: FreeTextUnitService,
              private unitService: UnitService,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              private notificationService: NotificationService,
              private unitFormService: UnitFormService) {}

  ngOnInit() {

    this.unitForm = this.unitFormService.unitForm;

    this.unitFormService.headline = 'Free-text';


    if (!this.model) {
      this.model = new FreeTextUnit(this.course._id);
    }
    // add a virtual FormControl which binds to model.markdown
    this.unitForm.addControl('markdown', new FormControl(this.model.markdown));
  }


  public openFullscreen(): void {
    const dialogRef = this.dialog.open(FreeTextUnitEditorDialog, {
      width: '94vw',
      height: '94vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {
        markdown: this.unitForm.controls.markdown ? this.unitForm.controls.markdown : '',
        unitForm: this.unitForm
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result !== 'undefined') {
        this.model.markdown = result;
        this.unitForm.patchValue({ markdown: result });
      }
    });
  }

  private isModelNewObj(): boolean {
    return typeof this.model._id === 'undefined';
  }
}
