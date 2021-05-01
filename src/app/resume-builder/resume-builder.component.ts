import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.scss']
})
export class ResumeBuilderComponent implements OnInit {
  resumeBuilderForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.resumeBuilderForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      experienceBlocks: this.formBuilder.array([this.buildExperienceBlock()])
    });
  }

  buildExperienceBlock(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required]],
      company: ['', [Validators.required]],
      location: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  save() {
    console.log(this.resumeBuilderForm, this.resumeBuilderForm.controls.experienceBlocks.value[0].company);
    console.log('Saved: ' + JSON.stringify(this.resumeBuilderForm.value));
    
    this.router.navigate(['/profilesite'], { queryParams: { 
      fname: this.resumeBuilderForm.get('firstName').value,
      lname: this.resumeBuilderForm.get('lastName').value,
      email: this.resumeBuilderForm.get('email').value,
      phone: this.resumeBuilderForm.get('phone').value,
      title: this.resumeBuilderForm.controls.experienceBlocks.value[0].title,
      company: this.resumeBuilderForm.controls.experienceBlocks.value[0].company,
      location: this.resumeBuilderForm.controls.experienceBlocks.value[0].location,
      startDate: this.resumeBuilderForm.controls.experienceBlocks.value[0].startDate,
      endDate: this.resumeBuilderForm.controls.experienceBlocks.value[0].endDate,
      description: this.resumeBuilderForm.controls.experienceBlocks.value[0].description,
    } })
  }

  get experienceBlocks(): FormArray {
    return this.resumeBuilderForm.get('experienceBlocks') as FormArray;
  }

  addExperience() {
    this.experienceBlocks.insert(0, this.buildExperienceBlock());
  }
}
