import { HomePage } from './home.po';
import { browser, logging } from 'protractor';
import { TareasPage } from './tareas.po';
import { FooterComponent } from 'src/app/core/footer/footer.component';

describe('workspace-project App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Curso Angular Aubay');
  });

  it('should display display in the footer the autor name', () => {
    page.navigateTo();
    let autor = 'Ruben de Paz'
    expect(page.getTitleText()).toContain(autor);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('workspace-project App Tareas', () => {
  let page: TareasPage

  beforeEach(() => {
    page = new TareasPage();
  });

  it('should display tittle h2', () => {
    page.navigateTo();
    let tittle = 'Tareas'
    expect(page.getTitleText()).toEqual(tittle);
  });
});

/* describe('workspace-project App Footer', () => {
  let page: FooterComponent

  beforeEach(() => {
    page = new FooterComponent();
  });

  it('should display display in the footer the autor name', () => {
    page.navigateTo();
    let autor = 'Rubén de Paz'
    expect(page.getTitleText()).toContain(autor);
  });
}); */