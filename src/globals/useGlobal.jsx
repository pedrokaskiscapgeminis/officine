import create from "zustand";
import { Vector3 } from "three";
import { copyTextToClipboard } from "./utility";
import { pages } from "./pages";

const pageKeys = Object.keys(pages);
const pageCurKey = pageKeys[0];
const pageCurObj = pages[pageCurKey];
const pageNav = pageKeys.map((key) => {
  return {
    link: `/${key}`,
    key: key,
    text: pages[key].title
  };
});

export const useGlobal = create((set, get) => ({
  /////////////////////////////////////////////////////////////////////////////////////
  // Init
  /////////////////////////////////////////////////////////////////////////////////////
  init: () => {
    console.count("init");
  },
  /////////////////////////////////////////////////////////////////////////////////////
  // 3D Objects
  /////////////////////////////////////////////////////////////////////////////////////
  gl: null,
  scene: null,
  camera: null,
  orbitControl: null,
  initThree: ({ gl, scene, camera, orbitControl }) => {
    console.count("initThree");
    set((state) => ({ gl, scene, camera, orbitControl }));
  },
  /////////////////////////////////////////////////////////////////////////////////////
  // 3D Progress Vars
  /////////////////////////////////////////////////////////////////////////////////////
  active: null,
  progress: null,
  errors: null,
  item: null,
  loaded: null,
  total: null,
  initProgress: ({ active, progress, errors, item, loaded, total }) => {
    console.count("initProgress");
    set((state) => ({ active, progress, errors, item, loaded, total }));
  },
  /////////////////////////////////////////////////////////////////////////////////////
  // 3D Camera Navigation
  /////////////////////////////////////////////////////////////////////////////////////
  sTarget: null,
  sPos: null,
  sFOV: null,
  oEnabled: true,
  initCameraNav: (sTarget, sPos, sFOV, oEnabled) => {
    console.count("initCameraNav");
    set((state) => ({ sTarget, sPos, sFOV, oEnabled }));
  },
  setEnabledTo: (b) => {
    set((state) => ({ oEnabled: b ? true : false }));
  },
  setCameraTo: (newCameraTo) => {
    const camera = get().camera;
    get().sPos.set([camera.position.x, camera.position.y, camera.position.z]);
    const oldCameraTo = get().cameraTo;
    set((state) => ({ cameraTo: { ...oldCameraTo, ...newCameraTo } }));
  },
  setTargetTo: (newTargetTo) => {
    get().sTarget.set([
      get().orbitControl.current.target.x,
      get().orbitControl.current.target.y,
      get().orbitControl.current.target.z
    ]);
    const oldTargetTo = get().targetTo;
    set((state) => ({ targetTo: { ...oldTargetTo, ...newTargetTo } }));
  },
  setFovTo: (fovTo) => {
    set((fovTo) => ({ fovTo }));
  },

  /////////////////////////////////////////////////////////////////////////////////////
  // Page Navigation
  /////////////////////////////////////////////////////////////////////////////////////
  pages,
  pageNav,
  pageKeys,
  pageCurKey,
  pageCurObj,
  setPageKey: (pageCurKey) => set((state) => ({ pageCurKey })),
  getContent: (key) => {
    const content = get().pages[key].content;
    return { content };
  },
  getAvatar: (key) => {
    const pages = get().pages;
    const allKeys = get().pageKeys;

    const current = pages[key];

    const index = allKeys.findIndex((e) => key === e);
    const N = index === allKeys.length - 1 ? 0 : index + 1;
    const P = index === 0 ? allKeys.length - 1 : index - 1;
    const next = allKeys[N];
    const prev = allKeys[P];

    //return "sup";
    return {
      title: current.title,
      image: current.avatar.image,
      copy: current.avatar.copy,
      next,
      prev
    };
  },
  getViewPositions: (key) => {
    const camera = get().camera;
    const views = get().pages[key].views;

    if (get().sPos && get().sTarget) {
      get().sPos.set([camera.position.x, camera.position.y, camera.position.z]);
      get().sTarget.set([
        get().orbitControl.current.target.x,
        get().orbitControl.current.target.y,
        get().orbitControl.current.target.z
      ]);
    }

    return views;
  },
  /////////////////////////////////////////////////////////////////////////////////////
  // Leva Options
  /////////////////////////////////////////////////////////////////////////////////////
  showLeva: 1,
  saveCameraPos: () => {
    const camera = get().camera;

    var dist = 1;
    var target = new Vector3();
    camera.getWorldDirection(target);
    target.multiplyScalar(dist);
    target.add(camera.position);

    const C = {
      x: parseFloat(camera.position.x.toFixed(3)),
      y: parseFloat(camera.position.y.toFixed(3)),
      z: parseFloat(camera.position.z.toFixed(3))
    };

    const T = {
      x: parseFloat(target.x.toFixed(3)),
      y: parseFloat(target.y.toFixed(3)),
      z: parseFloat(target.z.toFixed(3))
    };

    const copyText = `targetTo:[${T.x},${T.y},${T.z}], cameraTo:[${C.x},${C.y},${C.z}], fovTo:${camera.fov}`;
    copyTextToClipboard(copyText);
  }
}));
