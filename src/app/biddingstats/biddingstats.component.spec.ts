import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingstatsComponent } from './biddingstats.component';

describe('BiddingstatsComponent', () => {
  let component: BiddingstatsComponent;
  let fixture: ComponentFixture<BiddingstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
