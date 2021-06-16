import React, { useEffect, useState } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
// const { Editor } = dynamic(import("react-draft-wysiwyg"), { ssr: false });
// const Editor = dynamic(
//   () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
//   {
//     ssr: false,
//   }
// );
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from "draftjs-to-html";
import draftToMarkdown from "draftjs-to-markdown";
import classNames from "classnames";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const HTMLEditor = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (!isEditing && props.value) {
      const contentBlock = convertFromHTML(props.value);

      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks,
          contentBlock.entityMap
        );
        const editorState = EditorState.createWithContent(contentState);
        setEditorState(editorState);
      }
    }
  }, [props.value])

  const onEditorStateChange = (value) => {
    setEditorState(value);
    if (value && props.onChange) {
      draftToExportType(convertToRaw(value.getCurrentContent()));
    }
  };

  const onChange = (rawDraftContentState) => {
    setIsEditing(true)
    var exportedValue = draftToExportType(rawDraftContentState);

    if (props.setFieldsValue) {
      var fields = {};
      fields[`${props["data-__field"].name}`] = exportedValue;
      props.setFieldsValue({ ...fields });
    } else if (props.onChange) {
      props.onChange(exportedValue);
    }
  };

  const draftToExportType = (draftData) => {
    if (props.exportType === "html") {
      return draftToHtml(draftData);
    } else if (props.exportType === "markdown") {
      return draftToMarkdown(draftData);
    }
  };

  // const { editorState, showEditor, contentState } = this.state;
  const {
    wrapperClassName,
    editorClassName,
    toolbarClassName,
    toolbar,
    footer,
    loading,
    placeholder,
  } = props;

  let editorClasses = classNames(editorClassName, footer && "has-footer");
  return (
    !loading && (
      <div>
          <Editor
            toolbar={{
              image: {
                uploadEnabled: false,
                inputAccept:
                  "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                defaultSize: {
                  height: "100%",
                  width: "100%",
                },
              },
              fontSize: {
                options: [8, 10, 12, 16, 18, 24, 36, 48, 72],
              },
              ...toolbar,
            }}
            editorState={editorState}
            wrapperClassName={wrapperClassName}
            editorClassName={editorClasses}
            toolbarClassName={toolbarClassName}
            onEditorStateChange={onEditorStateChange}
            onChange={onChange}
            placeholder={placeholder}
          />
        {footer && <div className="editor-footer">{footer}</div>}
      </div>
    )
  );
}

HTMLEditor.defaultProps = {
  exportType: "html", // 'html', 'markdown', 'json'
  loading: false,
  placeholder: "",
};

export default HTMLEditor;
