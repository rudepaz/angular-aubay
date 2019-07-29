import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AppComponent } from 'src/app/app.component';
import { SaludoComponent } from 'src/app/home/saludo/saludo.component';
import { FormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let tittle = 'Curso Angular Aubay'

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent,
                      SaludoComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as tittle 'Curso Angular Aubay'`, () => {
      expect(component.tittle).toEqual(tittle);
  });

  it('should render tittle in a h1 tag', () => {
      const vista = fixture.debugElement.nativeElement;
      expect(vista.querySelector('h1').textContent).toContain('Welcome to '+tittle+'!');
  });
});
