import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatinhosAppComponent } from './gatinhos-app.component';

describe('GatinhosAppComponent', () => {
  let component: GatinhosAppComponent;
  let fixture: ComponentFixture<GatinhosAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatinhosAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatinhosAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
