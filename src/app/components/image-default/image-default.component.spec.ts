import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDefaultComponent } from './image-default.component';

describe('ImageDefaultComponent', () => {
  let component: ImageDefaultComponent;
  let fixture: ComponentFixture<ImageDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDefaultComponent]
    });
    fixture = TestBed.createComponent(ImageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
