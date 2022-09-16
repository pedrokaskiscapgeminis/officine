import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
const path = "./assets/glb/Office.glb";
export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(path);
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[29.53, -89.68, 14.33]}
        rotation={[0, 1.57, 0]}
        scale={[12.3, 12.3, 12.3]}
      >
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Bld_Ceiling_Panel_02.geometry}
          position={[1.15, 8.92, -2.37]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Ceiling_Panel_02_(1)"].geometry}
          position={[1.15, 8.92, 0.11]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Ceiling_Panel_02_(2)"].geometry}
          position={[-1.35, 8.92, -2.37]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Ceiling_Panel_02_(3)"].geometry}
          position={[-1.35, 8.92, 0.11]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Bld_Door_04.geometry}
          position={[0.4, 5.93, -4.93]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Floor_Carpet_01_(79)"].geometry}
          position={[1.15, 5.93, -4.87]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Floor_Carpet_01_(80)"].geometry}
          position={[1.16, 5.93, -4.87]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Floor_Carpet_01_(82)"].geometry}
          position={[1.15, 5.93, -2.37]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Floor_Carpet_01_(83)"].geometry}
          position={[1.16, 5.93, -2.37]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Wall_Baseboard_01_(114)"].geometry}
          position={[-1.34, 5.93, 0.13]}
          rotation={[0, -1.57, 0]}
          scale={[2, 1, 1]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Wall_Baseboard_01_(12)"].geometry}
          position={[3.65, 5.93, -4.87]}
          rotation={[0, 1.57, 0]}
          scale={[2, 1, 1]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Wall_Baseboard_Door_01_(22)"].geometry}
          position={[-1.34, 5.93, -4.87]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <group position={[3.65, 5.93, 0.13]}>
          <mesh
            material={materials.PolygonOffice_Material_02_A}
            geometry={nodes["SM_Bld_Wall_Baseboard_Window_01_(1)_1"].geometry}
          />
          <mesh
            material={materials.PolygonOffice_Material_Glass}
            geometry={nodes["SM_Bld_Wall_Baseboard_Window_01_(1)_2"].geometry}
          />
        </group>
        <group position={[1.16, 5.93, 0.13]}>
          <mesh
            material={materials.PolygonOffice_Material_02_A}
            geometry={nodes["SM_Bld_Wall_Baseboard_Window_01_(1)_1"].geometry}
          />
          <mesh
            material={materials.PolygonOffice_Material_Glass}
            geometry={nodes["SM_Bld_Wall_Baseboard_Window_01_(1)_2"].geometry}
          />
        </group>
        <group
          position={[1.15, 5.93, -4.87]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <mesh
            material={materials.PolygonOffice_Material_02_A}
            geometry={nodes["SM_Bld_Wall_Baseboard_Window_04_(3)_1"].geometry}
          />
          <mesh
            material={materials.PolygonOffice_Material_Glass}
            geometry={nodes["SM_Bld_Wall_Baseboard_Window_04_(3)_2"].geometry}
          />
        </group>
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Bld_Wall_Window_Blinds_Closed_01.geometry}
          position={[1.16, 5.93, 0.13]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Bld_Wall_Window_Blinds_Open_04_(1)"].geometry}
          position={[1.15, 5.93, -4.87]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Bld_Wall_Window_Blinds_Up_01.geometry}
          position={[3.65, 5.93, 0.13]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Alcohol_Bottle_01.geometry}
          position={[1.18, 6.67, -1.93]}
          rotation={[0, -0.63, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Book_Group_01_(2)"].geometry}
          position={[-0.93, 7.15, -0.97]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.9, 0.9, 0.9]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Book_Group_02_(3)"].geometry}
          position={[-0.95, 6.86, -1.32]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.81, 0.81, 0.81]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Book_Group_03_(3)"].geometry}
          position={[-0.93, 6.56, -1]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.83, 0.83, 0.83]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Book_Group_04_(4)"].geometry}
          position={[-0.96, 7.15, -1.5]}
          rotation={[0, 1.36, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Book_Group_08.geometry}
          position={[-0.86, 6.86, -0.74]}
          rotation={[0, -1.3, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Card_Scanner_01.geometry}
          position={[-0.8, 6.98, -5.01]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_CardRoller_01.geometry}
          position={[1.13, 6.68, -3.39]}
          rotation={[-Math.PI, -1.23, -Math.PI]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Cellphone_01_(3)"].geometry}
          position={[1.53, 6.67, -1.92]}
          rotation={[0, -0.37, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Certificate_01_(2)"].geometry}
          position={[1.19, 7.51, 0.01]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Chair_01.geometry}
          position={[-0.12, 5.93, -3.22]}
          rotation={[-Math.PI, -0.97, -Math.PI]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Chair_01_(1)"].geometry}
          position={[-0.01, 5.93, -2.17]}
          rotation={[0, -1.19, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Chair_08.geometry}
          position={[2.32, 5.91, -2.81]}
          rotation={[0, 1.26, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Clock_01_(6)"].geometry}
          position={[1.01, 8.16, -4.73]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <mesh
            material={materials.PolygonOffice_Material_02_A}
            geometry={nodes.SM_Prop_Clock_01_Hand_01.geometry}
            position={[0, 0, -0.04]}
            rotation={[0, 0, 2.19]}
          />
          <mesh
            material={materials.PolygonOffice_Material_02_A}
            geometry={nodes.SM_Prop_Clock_01_Hand_02.geometry}
            position={[0, 0, -0.04]}
            rotation={[0.09, -0.03, -0.81]}
          />
        </mesh>
        <group position={[1.31, 6.68, -2.28]} rotation={[0, -0.99, 0]}>
          <mesh
            material={materials.PolygonOffice_Material_02_A}
            geometry={nodes.SM_Prop_Computer_Monitor_01_1.geometry}
          />
          <mesh
            material={materials.PolygonOffice_Material_Screen_05}
            geometry={nodes.SM_Prop_Computer_Monitor_01_2.geometry}
          />
        </group>
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Console_MegaCube_01.geometry}
          position={[-0.91, 6.56, -1.58]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Controller_01_(2)"].geometry}
          position={[-0.91, 7.15, -0.85]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Darkboard_01.geometry}
          position={[3.51, 7.63, -0.55]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Desk_03.geometry}
          position={[1.25, 5.93, -2.81]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Employee_Wall_01.geometry}
          position={[-1.14, 8.06, -3.33]}
          rotation={[0, -1.57, 0]}
        />
        <group
          position={[1.38, 6.68, -2.92]}
          rotation={[-Math.PI, -1.51, -Math.PI]}
        >
          <mesh
            material={materials.PolygonOffice_Material_02_A}
            geometry={nodes["SM_Prop_Laptop_02_(3)_1"].geometry}
          />
          <mesh
            material={materials.PolygonOffice_Material_Screen_03}
            geometry={nodes["SM_Prop_Laptop_02_(3)_2"].geometry}
          />
        </group>
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Minigolf_Ball_01.geometry}
          position={[0.91, 6, -0.62]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Minigolf_Club_01.geometry}
          position={[0.16, 6.63, -0.08]}
          rotation={[0.18, 0, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Minigolf_Flag_01.geometry}
          position={[2.9, 5.93, -0.62]}
          rotation={[0, 0.95, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Minigolf_Green_01.geometry}
          position={[0.65, 5.93, -0.62]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Phone_Desk_01_(1)"].geometry}
          position={[1.58, 6.68, -3.53]}
          rotation={[-Math.PI, -0.98, -Math.PI]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_Presentation_Chart_01_(1)"].geometry}
          position={[2.71, 5.93, -4.05]}
          rotation={[-Math.PI, 0.94, -Math.PI]}
        />
        <group position={[3.53, 8.75, -2.43]} rotation={[0, 1.57, 0]}>
          <mesh
            material={materials.PolygonOffice_Material_02_A}
            geometry={nodes["SM_Prop_ProjectorScreen_02_Down_(1)_1"].geometry}
          />
          <mesh
            material={materials.PolygonOffice_Material_Screen_02}
            geometry={nodes["SM_Prop_ProjectorScreen_02_Down_(1)_2"].geometry}
          />
        </group>
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Shelf_05.geometry}
          position={[-0.96, 5.93, -1.14]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Spaceship_01.geometry}
          position={[0.99, 6.67, -1.93]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes.SM_Prop_Trophy_01.geometry}
          position={[-0.96, 7.44, -0.59]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_WallDressing_02_(4)"].geometry}
          position={[1.13, 7.02, -4.72]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials.PolygonOffice_Material_02_A}
          geometry={nodes["SM_Prop_WallDressing_03_(3)"].geometry}
          position={[-1.21, 7.5, -1.18]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(path);
