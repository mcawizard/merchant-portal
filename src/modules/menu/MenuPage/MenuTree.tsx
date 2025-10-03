import React, { memo, useEffect, useState } from 'react';
import { Tree, NodeModel, getBackendOptions, MultiBackend } from '@minoru/react-dnd-treeview';
import { DndProvider } from 'react-dnd';
import { TableMenu } from '@core/components/TableMenu';
import { Button } from 'reactstrap';
import './MenuTree.scss';
import { Menu } from '@core/components/Menu';

interface MenuTreeProps {
  items: NodeModel[]; // Accepts an array of dynamic menu items
  onSort(items: any[]): void;
}

export const MenuTree = memo((props: MenuTreeProps): JSX.Element => {
  const { items, onSort } = props;
  const [treeData, setTreeData] = useState<NodeModel[]>(items);

  useEffect(() => {
    setTreeData(items);
  }, [items]);

  const handleDrop = (newTreeData: NodeModel[]): void => {
    onSort(newTreeData);
    setTreeData(newTreeData);
  };

  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      {/*<Button color="primary" onClick={handleAddItem} className="add-button">*/}
      {/*  Add Menu Item*/}
      {/*</Button>*/}
      <Tree
        initialOpen={true}
        tree={treeData}
        rootId={0}
        onDrop={handleDrop}
        dragPreviewRender={(monitorProps): JSX.Element => {
          const node = monitorProps.item as NodeModel;
          const displayText = node.text || 'Unnamed Item';
          return (
            <div
              style={{
                padding: '4px 8px',
                background: '#eee',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Dragging: <strong>{displayText}</strong>
            </div>
          );
        }}
        render={(node: NodeModel, { depth, isOpen, onToggle }: { depth: number; isOpen: boolean; onToggle: (id: number) => void }): JSX.Element => (
          <div className="tree-node" style={{ marginLeft: depth * 20 }}>
            <i className="fas fa-grip-lines drag-icon"></i>
            {node.droppable && (
              <span className="toggle-icon" onClick={() => onToggle(Number(node.id))}>
                {isOpen ? '–' : '+'}
              </span>
            )}
            <span className="node-text"> {node.text}</span>
            <span className="node-actions">
              {node.buttons &&
                node.buttons.map((action, index) => (
                  <React.Fragment key={index}>
                    <Button color="link" onClick={action.onClick}>
                      {action.title}
                    </Button>
                    {node.buttons && node.buttons.length - 1 !== index && <span className="action-divider">|</span>}
                  </React.Fragment>
                ))}
            </span>
          </div>
        )}
      />
    </DndProvider>
  );
});
