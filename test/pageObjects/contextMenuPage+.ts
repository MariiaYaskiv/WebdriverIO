import RootObject from './rootObject';


export default class ContextMenu extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open('/context_menu');
  }

  async contextMenuClick(): Promise<void>  {
    const menu = await $('#hot-spot')
    await menu.click({ button: 'right', skipRelease: true })
  }
}