import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosMocSrvComponent } from './libros-moc-srv.component';

describe('LibrosMocSrvComponent', () => {
  let component: LibrosMocSrvComponent;
  let fixture: ComponentFixture<LibrosMocSrvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosMocSrvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosMocSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
